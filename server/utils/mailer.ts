import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

let cachedTransporter: Transporter | null = null

/**
 * Lazily create a Nodemailer transporter from runtime config.
 * Works with any SMTP server: Gmail, Outlook, Mailgun, Postmark,
 * AWS SES, Resend SMTP, your hosting provider's relay, etc.
 */
export function getMailer(): Transporter {
  const config = useRuntimeConfig()

  if (!config.mail.host) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Mail is not configured. Set NUXT_MAIL_HOST (and related vars) in your .env file.',
    })
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: config.mail.host,
      port: Number(config.mail.port) || 587,
      secure: Boolean(config.mail.secure),
      auth: config.mail.user
        ? { user: config.mail.user, pass: config.mail.pass }
        : undefined,
    })
  }

  return cachedTransporter
}

export interface SendMailOptions {
  to: string | string[]
  subject: string
  /** Rendered HTML body */
  html: string
  /** Plain-text fallback */
  text?: string
  replyTo?: string
}

/**
 * Send a message using the configured from-address.
 */
export async function sendMail(options: SendMailOptions) {
  const config = useRuntimeConfig()

  return getMailer().sendMail({
    from: config.mail.from || config.mail.user,
    ...options,
  })
}

/**
 * Verify the SMTP connection (useful as a health check or on boot).
 */
export async function verifyMailer(): Promise<boolean> {
  await getMailer().verify()
  return true
}
