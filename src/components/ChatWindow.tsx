'use client'

import { useEffect, useMemo, useState } from 'react'
import { detectContactSharing, getContactFilterMessage } from '@/lib/contactFilter'

type ChatMessage = {
  id: string
  content: string
  createdAt: string
  senderId: string
  receiverId: string
  sender: {
    id: string
    fullName: string
    role: string
  }
}

export default function ChatWindow({
  senderId,
  receiverId,
}: {
  senderId: string
  receiverId: string
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const filterResult = useMemo(() => detectContactSharing(content), [content])
  const warning = content.trim() ? getContactFilterMessage(filterResult) : ''

  useEffect(() => {
    let cancelled = false

    async function loadMessages() {
      setLoading(true)
      const response = await fetch(`/api/messages?senderId=${senderId}&receiverId=${receiverId}`)
      const data = await response.json()

      if (!cancelled) {
        setMessages(data.messages ?? [])
        setLoading(false)
      }
    }

    loadMessages()

    return () => {
      cancelled = true
    }
  }, [senderId, receiverId])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!content.trim()) {
      return
    }

    if (!filterResult.allowed) {
      setError(getContactFilterMessage(filterResult))
      return
    }

    setSending(true)
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId, receiverId, content }),
    })
    const data = await response.json()
    setSending(false)

    if (!response.ok) {
      setError(data.error ?? 'تعذر إرسال الرسالة')
      return
    }

    setMessages((current) => [...current, data.message])
    setContent('')
  }

  return (
    <section className="rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5">
        <h2 className="text-xl font-bold text-green-800">المحادثة داخل رزقي هب</h2>
        <p className="mt-1 text-sm text-gray-600">
          تتم مراجعة الرسائل تلقائيًا لمنع تبادل أرقام الجوال أو البريد أو روابط التواصل.
        </p>
      </div>

      <div className="h-[460px] space-y-4 overflow-y-auto p-5">
        {loading ? (
          <p className="text-center text-gray-500">جاري تحميل الرسائل...</p>
        ) : messages.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center">
            <p className="font-semibold text-gray-700">ابدأ المحادثة بسؤال عن المنتج أو التوصيل.</p>
            <p className="mt-2 text-sm text-gray-500">تذكير: لا تشارك أي وسيلة تواصل خارج التطبيق.</p>
          </div>
        ) : (
          messages.map((message) => {
            const isMine = message.senderId === senderId

            return (
              <div key={message.id} className={`flex ${isMine ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    isMine
                      ? 'bg-green-700 text-white'
                      : 'border border-gray-100 bg-gray-50 text-gray-800'
                  }`}
                >
                  <p className="mb-1 text-xs opacity-75">{message.sender.fullName}</p>
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            )
          })
        )}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-100 p-5">
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-700">
          اكتب رسالتك
        </label>
        <textarea
          id="message"
          value={content}
          onChange={(event) => {
            setContent(event.target.value)
            setError('')
          }}
          rows={4}
          maxLength={1000}
          className="input-field resize-none bg-white"
          placeholder="مثال: هل المنتج متوفر للتوصيل هذا الأسبوع؟"
        />

        {(warning || error) && (
          <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error || warning}
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            مسموح بالسؤال عن المنتج والطلب والتوصيل. ممنوع إرسال وسائل التواصل الخارجية.
          </p>
          <button
            type="submit"
            disabled={sending || !content.trim() || !filterResult.allowed}
            className="btn-primary disabled:translate-y-0 disabled:shadow-md"
          >
            {sending ? 'جاري الإرسال...' : 'إرسال'}
          </button>
        </div>
      </form>
    </section>
  )
}
