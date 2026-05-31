import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { detectContactSharing, getContactFilterMessage } from '@/lib/contactFilter'

const messageSchema = z.object({
  senderId: z.string().min(1),
  receiverId: z.string().min(1),
  content: z.string().trim().min(1).max(1000),
})

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const senderId = searchParams.get('senderId')
  const receiverId = searchParams.get('receiverId')

  if (!senderId || !receiverId) {
    return NextResponse.json({ error: 'senderId and receiverId are required' }, { status: 400 })
  }

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    include: {
      sender: { select: { id: true, fullName: true, role: true } },
      receiver: { select: { id: true, fullName: true, role: true } },
    },
    orderBy: { createdAt: 'asc' },
    take: 100,
  })

  return NextResponse.json({ messages })
}

export async function POST(request: NextRequest) {
  const parsed = messageSchema.safeParse(await request.json())

  if (!parsed.success) {
    return NextResponse.json({ error: 'بيانات الرسالة غير صحيحة' }, { status: 400 })
  }

  const filterResult = detectContactSharing(parsed.data.content)
  if (!filterResult.allowed) {
    return NextResponse.json(
      {
        error: getContactFilterMessage(filterResult),
        violations: filterResult.violations,
      },
      { status: 422 }
    )
  }

  const [sender, receiver] = await Promise.all([
    prisma.user.findUnique({ where: { id: parsed.data.senderId }, select: { id: true } }),
    prisma.user.findUnique({ where: { id: parsed.data.receiverId }, select: { id: true } }),
  ])

  if (!sender || !receiver) {
    return NextResponse.json({ error: 'لم يتم العثور على أحد طرفي المحادثة' }, { status: 404 })
  }

  const message = await prisma.message.create({
    data: {
      senderId: parsed.data.senderId,
      receiverId: parsed.data.receiverId,
      content: parsed.data.content,
      isFlagged: false,
    },
    include: {
      sender: { select: { id: true, fullName: true, role: true } },
      receiver: { select: { id: true, fullName: true, role: true } },
    },
  })

  return NextResponse.json({ message }, { status: 201 })
}
