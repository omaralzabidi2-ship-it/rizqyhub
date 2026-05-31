// prisma/seed.ts
import { PrismaClient, ProducerType, UserRole, ApprovalStatus, DeliveryMode } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('Missing DATABASE_URL in .env file')
}

// إنشاء الـ Adapter للاتصال بقاعدة البيانات
const adapter = new PrismaPg(connectionString)

// تمرير الـ adapter لعميل Prisma
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 بدء إضافة البيانات التجريبية...')

  // 🔹 1. إنشاء/جلب الأقسام الأربعة الرئيسية
  const categorySlugs = ['food', 'handicrafts', 'personal_care', 'sewing']
  const categoryNames = ['المنتجات الغذائية', 'الحرف اليدوية', 'العناية الشخصية', 'الخياطة والتطريز']
  
  for (let i = 0; i < categorySlugs.length; i++) {
    await prisma.category.upsert({
      where: { slug: categorySlugs[i] },
      update: {},
      create: { name: categoryNames[i], slug: categorySlugs[i] },
    })
  }
  
  // جلب الأقسام لضمان الحصول على IDs الصحيحة
  const categories = await prisma.category.findMany({
    where: { slug: { in: categorySlugs } }
  })
  const categoryMap = new Map(categories.map(c => [c.slug, c.id]))
  
  console.log('✅ تم إنشاء/جلب الأقسام:', categoryNames.join(', '))

  // 🔹 2. إنشاء مستخدم إداري
  await prisma.user.upsert({
    where: { email: 'admin@rizqyhub.com' },
    update: {},
    create: {
      email: 'admin@rizqyhub.com',
      passwordHash: '$2b$10$dummyhashforexampleonly',
      fullName: 'مدير رزقي هب',
      role: UserRole.ADMIN,
      status: ApprovalStatus.APPROVED,
      isEmailVerified: true,
      adminProfile: {
        create: { permissions: ['approve_producers', 'manage_payouts', 'view_audit'] },
      },
    },
  })
  console.log('✅ تم إنشاء حساب الإدارة')

  // 🔹 3. إنشاء أسرة منتجة - فئة أ
  const producerAUser = await prisma.user.upsert({
    where: { email: 'family.a@rizqyhub.com' },
    update: {},
    create: {
      email: 'family.a@rizqyhub.com',
      passwordHash: '$2b$10$dummyhashforexampleonly',
      fullName: 'أسرة السدو المنتجة',
      role: UserRole.PRODUCER,
      status: ApprovalStatus.APPROVED,
      isEmailVerified: true,
      producerProfile: {
        create: {
          type: ProducerType.TYPE_A,
          licenseDocUrl: 'https://example.com/license-a.pdf',
          bankIbanHash: 'encrypted_iban_hash_here',
          bankName: 'البنك الأهلي السعودي',
          approvalStatus: ApprovalStatus.APPROVED,
          commissionRate: 5.00,
          deliveryMode: DeliveryMode.SELF_DELIVERY,
          deliveryRadius: 15,
          deliveryFee: 10.00,
          pickupCity: 'الرياض',
          pickupDistrict: 'العلياء',
          pickupLatitude: 24.7136,
          pickupLongitude: 46.6753,
        },
      },
    },
    include: { producerProfile: true }
  })
  const producerAProfileId = producerAUser.producerProfile?.id
  if (!producerAProfileId) throw new Error('Failed to get producer A profile ID')
  console.log('✅ تم إنشاء أسرة فئة أ: "أسرة السدو المنتجة"')

  // 🔹 4. إنشاء أسرة منتجة - فئة ب
  const producerBUser = await prisma.user.upsert({
    where: { email: 'family.b@rizqyhub.com' },
    update: {},
    create: {
      email: 'family.b@rizqyhub.com',
      passwordHash: '$2b$10$dummyhashforexampleonly',
      fullName: 'أسرة التمر الطبيعي',
      role: UserRole.PRODUCER,
      status: ApprovalStatus.APPROVED,
      isEmailVerified: true,
      producerProfile: {
        create: {
          type: ProducerType.TYPE_B,
          licenseDocUrl: 'https://example.com/license-b.pdf',
          bankIbanHash: 'encrypted_iban_hash_here',
          bankName: 'مصرف الراجحي',
          approvalStatus: ApprovalStatus.APPROVED,
          commissionRate: 5.00,
          deliveryMode: DeliveryMode.SELF_DELIVERY,
          deliveryRadius: 10,
          deliveryFee: 8.00,
          pickupCity: 'القصيم',
          pickupDistrict: 'عنيزة',
          pickupLatitude: 26.3833,
          pickupLongitude: 43.9833,
        },
      },
    },
    include: { producerProfile: true }
  })
  const producerBProfileId = producerBUser.producerProfile?.id
  if (!producerBProfileId) throw new Error('Failed to get producer B profile ID')
  console.log('✅ تم إنشاء أسرة فئة ب: "أسرة التمر الطبيعي"')

  // 🔹 5. إنشاء منتجات تجريبية
  const products = [
    // 🍯 قسم الغذائي - من أسرة التمر الطبيعي (فئة ب)
    {
      title: 'تمر سكري فاخر - 1 كجم',
      description: 'تمر سكري طبيعي من مزارع القصيم، معبأ بعناية فائقة',
      price: 45.00,
      stock: 50,
      images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400'],
      isOrganic: true,
      categorySlug: 'food',
      producerProfileId: producerBProfileId,
    },
    {
      title: 'عسل سدر جبلي - 500 جم',
      description: 'عسل سدر أصلي من جبال الباحة، نقاء وطعم لا يُضاهى',
      price: 120.00,
      stock: 20,
      images: ['https://images.unsplash.com/photo-1587132164700-e4e1cab86f91?w=400'],
      isOrganic: true,
      categorySlug: 'food',
      producerProfileId: producerBProfileId,
    },
    {
      title: 'مخللات منزلية متنوعة',
      description: 'مخللات خيار، جزر، ولفط مصنوعة يدوياً بوصفات تقليدية',
      price: 25.00,
      stock: 30,
      images: ['https://images.unsplash.com/photo-1563240670-a7c7fac1b778?w=400'],
      isOrganic: false,
      categorySlug: 'food',
      producerProfileId: producerBProfileId,
    },

    // 🎨 قسم الحرف اليدوية - من أسرة السدو (فئة أ)
    {
      title: 'وسادة سدو تقليدية',
      description: 'وسادة مزخرفة بنقوش السدو النجدية الأصيلة، يدوياً 100%',
      price: 85.00,
      stock: 15,
      images: ['https://images.unsplash.com/photo-1584308972272-9cf4b93c8c3f?w=400'],
      isOrganic: false,
      categorySlug: 'handicrafts',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'سلة خوص يدوية صغيرة',
      description: 'سلة منسوجة يدوياً من خوص النخيل، مثالية للهدايا والتخزين',
      price: 55.00,
      stock: 25,
      images: ['https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=400'],
      isOrganic: false,
      categorySlug: 'handicrafts',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'مجسم حصان تراثي',
      description: 'مجسم خشبي محفور يدوياً يمثل التراث السعودي',
      price: 150.00,
      stock: 8,
      images: ['https://images.unsplash.com/photo-1543857778-c4a1a5206609?w=400'],
      isOrganic: false,
      categorySlug: 'handicrafts',
      producerProfileId: producerAProfileId,
    },

    // 🧴 قسم العناية الشخصية - من أسرة السدو (فئة أ)
    {
      title: 'صابون زيت زيتون طبيعي',
      description: 'صابون مصنوع يدوياً من زيت الزيتون البكر، للبشرة الحساسة',
      price: 18.00,
      stock: 40,
      images: ['https://images.unsplash.com/photo-1600857345460-2cf2e4f60f3d?w=400'],
      isOrganic: true,
      categorySlug: 'personal_care',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'بخور عودي فاخر',
      description: 'بخور عودي أصلي من أجود أنواع العود، رائحة تدوم طويلاً',
      price: 65.00,
      stock: 30,
      images: ['https://images.unsplash.com/photo-1601850494422-0cf0e4ed0c6e?w=400'],
      isOrganic: false,
      categorySlug: 'personal_care',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'زيوت عطرية طبيعية',
      description: 'مجموعة من 3 زيوت عطرية: ورد، مسك، عنبر',
      price: 95.00,
      stock: 20,
      images: ['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'],
      isOrganic: true,
      categorySlug: 'personal_care',
      producerProfileId: producerAProfileId,
    },

    // 🧵 قسم الخياطة - من أسرة السدو (فئة أ)
    {
      title: 'ثوب طفلة مطرز يدوياً',
      description: 'ثوب أطفال بقصة تقليدية، مطرز بخيوط ذهبية',
      price: 180.00,
      stock: 10,
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'],
      isOrganic: false,
      categorySlug: 'sewing',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'شيلة حرير مزخرفة',
      description: 'شيلة من الحرير الطبيعي، مزخرفة بتطريزات يدوية',
      price: 120.00,
      stock: 12,
      images: ['https://images.unsplash.com/photo-1599642463374-1c96d4f8d5b6?w=400'],
      isOrganic: false,
      categorySlug: 'sewing',
      producerProfileId: producerAProfileId,
    },
    {
      title: 'حقيبة قماش مطرزة',
      description: 'حقيبة يد عملية من القماش القطني، بتطريزات تراثية',
      price: 75.00,
      stock: 18,
      images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400'],
      isOrganic: false,
      categorySlug: 'sewing',
      producerProfileId: producerAProfileId,
    },
  ]

  for (const p of products) {
    const categoryId = categoryMap.get(p.categorySlug)
    if (!categoryId) {
      console.warn(`⚠️ Category not found: ${p.categorySlug}`)
      continue
    }
    
    await prisma.product.create({
      data: {
        title: p.title,
        description: p.description,
        price: p.price,
        stock: p.stock,
        images: p.images,
        isOrganic: p.isOrganic,
        status: ApprovalStatus.APPROVED,
        category: { connect: { id: categoryId } },
        producer: { connect: { id: p.producerProfileId } },
      },
    })
  }
  console.log(`✅ تم إنشاء ${products.length} منتجاً تجريبياً`)

  // 🔹 6. إنشاء عميل تجريبي
  await prisma.user.upsert({
    where: { email: 'customer@rizqyhub.com' },
    update: {},
    create: {
      email: 'customer@rizqyhub.com',
      passwordHash: '$2b$10$dummyhashforexampleonly',
      fullName: 'أحمد محمد',
      role: UserRole.CUSTOMER,
      status: ApprovalStatus.APPROVED,
      isEmailVerified: true,
      customerProfile: {
        create: {
          addresses: {
            create: {
              city: 'الرياض',
              district: 'الملز',
              street: 'شارع التخصصي',
              building: 'عمارة 123',
              latitude: 24.7136,
              longitude: 46.6753,
              isDefault: true,
            },
          },
        },
      },
    },
  })
  console.log('✅ تم إنشاء حساب عميل تجريبي')

  console.log('\n🎉 اكتملت إضافة البيانات التجريبية بنجاح!')
  console.log('\n📋 بيانات الدخول للتجربة:')
  console.log('👤 عميل: customer@rizqyhub.com')
  console.log('🏠 أسرة أ: family.a@rizqyhub.com')
  console.log('🏠 أسرة ب: family.b@rizqyhub.com')
  console.log('🔐 إدارة: admin@rizqyhub.com')
}

main()
  .catch((e) => {
    console.error('❌ خطأ أثناء إضافة البيانات:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
