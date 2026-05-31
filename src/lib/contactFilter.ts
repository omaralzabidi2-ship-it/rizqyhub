export type ContactViolation = {
  type: 'email' | 'phone' | 'url' | 'social' | 'contact_request'
  label: string
}

export type ContactFilterResult = {
  allowed: boolean
  violations: ContactViolation[]
}

const arabicDigitMap: Record<string, string> = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
}

const arabicLetterDigits: Record<string, string> = {
  صفر: '0',
  واحد: '1',
  واحده: '1',
  واحدة: '1',
  اثنين: '2',
  اثنان: '2',
  اتنين: '2',
  ثنين: '2',
  ثلاثة: '3',
  ثلاثه: '3',
  ثلاث: '3',
  اربعة: '4',
  اربعه: '4',
  اربع: '4',
  خمسة: '5',
  خمسه: '5',
  خمس: '5',
  ستة: '6',
  سته: '6',
  ست: '6',
  سبعة: '7',
  سبعه: '7',
  سبع: '7',
  ثمانية: '8',
  ثمانيه: '8',
  ثمان: '8',
  تسعة: '9',
  تسعه: '9',
  تسع: '9',
}

const contactWords = [
  'واتساب',
  'وتساب',
  'واتس',
  'whatsapp',
  'watsapp',
  'wa.me',
  'جوال',
  'رقمي',
  'رقم',
  'اتصل',
  'اتصال',
  'تواصل خارج',
  'خارج التطبيق',
  'سناب',
  'snap',
  'telegram',
  'تلجرام',
  'تيليجرام',
  'انستقرام',
  'instagram',
  'ايميل',
  'email',
  'بريد',
]

function normalizeDigits(value: string) {
  return value.replace(/[٠-٩۰-۹]/g, (digit) => arabicDigitMap[digit] ?? digit)
}

function normalizeLetterDigits(value: string) {
  let normalized = value
  for (const [word, digit] of Object.entries(arabicLetterDigits)) {
    normalized = normalized.replace(new RegExp(`\\b${word}\\b`, 'gi'), digit)
  }
  return normalized
}

function normalizeText(value: string) {
  return normalizeLetterDigits(normalizeDigits(value))
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
}

function compactForDetection(value: string) {
  return normalizeText(value).replace(/[\s\-_.،,;:|/\\()[\]{}'"`~!؟?]+/g, '')
}

function addViolation(
  violations: ContactViolation[],
  type: ContactViolation['type'],
  label: string
) {
  if (!violations.some((item) => item.type === type)) {
    violations.push({ type, label })
  }
}

export function detectContactSharing(message: string): ContactFilterResult {
  const normalized = normalizeText(message)
  const compact = compactForDetection(message)
  const violations: ContactViolation[] = []

  const directEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i
  const obfuscatedEmail =
    /[a-z0-9._%+-]+\s*(?:@|\bat\b|ات|آت|على)\s*[a-z0-9.-]+\s*(?:\.|\bdot\b|دوت|نقطه|نقطة)\s*[a-z]{2,}/i

  if (
    directEmail.test(normalized) ||
    obfuscatedEmail.test(normalized) ||
    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(compact)
  ) {
    addViolation(violations, 'email', 'بريد إلكتروني')
  }

  const digitsOnly = compact.replace(/\D/g, '')
  const phonePatterns = [
    /(?:9665|009665|\+9665|05)\d{8}/,
    /\d{10,}/,
  ]

  if (phonePatterns.some((pattern) => pattern.test(digitsOnly))) {
    addViolation(violations, 'phone', 'رقم هاتف أو جوال')
  }

  if (
    /(https?:\/\/|www\.|wa\.me|t\.me|snapchat\.com|instagram\.com|x\.com|twitter\.com)/i.test(normalized) ||
    /(com|net|org|sa|io|me|app)$/i.test(compact) && /[a-z0-9]{3,}\.(com|net|org|sa|io|me|app)/i.test(normalized)
  ) {
    addViolation(violations, 'url', 'رابط خارجي')
  }

  if (/(^|\s)@[a-z0-9_.]{3,}/i.test(normalized) || /(snap|instagram|telegram|whatsapp)\s*[:：]?\s*[a-z0-9_.-]{3,}/i.test(normalized)) {
    addViolation(violations, 'social', 'حساب تواصل اجتماعي')
  }

  const containsContactWord = contactWords.some((word) => normalized.includes(word))
  const nearbyDigits = /\d(?:\D{0,4}\d){5,}/.test(normalized)
  if (containsContactWord && nearbyDigits) {
    addViolation(violations, 'contact_request', 'محاولة نقل التواصل خارج التطبيق')
  }

  return {
    allowed: violations.length === 0,
    violations,
  }
}

export function getContactFilterMessage(result: ContactFilterResult) {
  if (result.allowed) {
    return ''
  }

  const labels = result.violations.map((item) => item.label).join('، ')
  return `لا يمكن إرسال الرسالة لأنها تحتوي على ${labels}. حفاظًا على حقوق الطرفين، يجب أن يتم التواصل داخل التطبيق فقط.`
}
