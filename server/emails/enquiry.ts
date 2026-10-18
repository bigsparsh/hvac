import { emailLayout } from './layout'

export interface EnquiryData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

const row = (label: string, value: string) => `
    <mj-section padding="8px 24px 0">
      <mj-column width="30%">
        <mj-text font-weight="600" color="#0f172a">${label}</mj-text>
      </mj-column>
      <mj-column width="70%">
        <mj-text>{{${value}}}</mj-text>
      </mj-column>
    </mj-section>`

/**
 * Notification sent to the business when someone submits an enquiry.
 */
export async function enquiryNotification(data: EnquiryData): Promise<{ subject: string; html: string; text: string }> {
  const subject = `New website enquiry: ${data.service || 'General'}${data.company ? ` — ${data.company}` : ''}`

  const mjml = emailLayout({
    title: 'New website enquiry',
    preheader: `${data.name} sent an enquiry via your website.`,
    body: `
    <mj-section padding="8px 24px 0">
      <mj-column>
        <mj-text>You have received a new enquiry from your website contact form.</mj-text>
      </mj-column>
    </mj-section>
${row('Name', 'name')}
${row('Company', 'company')}
${row('Email', 'email')}
${row('Phone', 'phone')}
${row('Service', 'service')}
    <mj-section padding="16px 24px 0">
      <mj-column>
        <mj-text font-weight="600" color="#0f172a">Message</mj-text>
        <mj-text>{{message}}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="24px 24px 0">
      <mj-column>
        <mj-button href="mailto:{{email}}?subject=Re%3A%20Enquiry">Reply to {{name}}</mj-button>
      </mj-column>
    </mj-section>`,
  })

  return { subject, ...(await renderMjml(mjml, data)) }
}

/**
 * Auto-reply sent back to the person who submitted the enquiry.
 */
export async function enquiryConfirmation(data: EnquiryData): Promise<{ subject: string; html: string; text: string }> {
  const subject = `We've received your enquiry`

  const mjml = emailLayout({
    title: 'Thanks for getting in touch',
    preheader: 'We have received your enquiry and will respond shortly.',
    body: `
    <mj-section padding="8px 24px 0">
      <mj-column>
        <mj-text>Hi {{name}},</mj-text>
        <mj-text>Thanks for contacting us${data.service ? ` about <strong>{{service}}</strong>` : ''}. We have received your message and will get back to you within one business day.</mj-text>
        <mj-text>In the meantime, if your enquiry is urgent, feel free to call us directly.</mj-text>
      </mj-column>
    </mj-section>`,
  })

  return { subject, ...(await renderMjml(mjml, data)) }
}
