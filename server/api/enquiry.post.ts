import { enquiryConfirmation, enquiryNotification } from '~~/server/emails/enquiry'
import type { EnquiryData } from '~~/server/emails/enquiry'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fail(message: string): never {
  throw createError({ statusCode: 400, statusMessage: message })
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<EnquiryData>>(event)

  const name = body?.name?.trim()
  const email = body?.email?.trim()
  const message = body?.message?.trim()
  const phone = body?.phone?.trim() || undefined
  const company = body?.company?.trim() || undefined
  const service = body?.service?.trim() || undefined

  if (!name) fail('Name is required.')
  if (!email || !EMAIL_RE.test(email)) fail('A valid email address is required.')
  if (!message || message.length < 10) fail('Message must be at least 10 characters.')

  const data: EnquiryData = { name, email, phone, company, service, message }
  const config = useRuntimeConfig()

  // Notify the business, then confirm to the sender.
  // Failures here shouldn't leak internals to the client.
  try {
    const notification = await enquiryNotification(data)
    await sendMail({
      to: config.mail.to,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      replyTo: email,
    })

    const confirmation = await enquiryConfirmation(data)
    await sendMail({
      to: email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    })
  }
  catch (error) {
    console.error('[enquiry] Failed to send email:', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'We could not send your enquiry right now. Please try again later.',
    })
  }

  return { ok: true }
})
