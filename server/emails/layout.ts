/**
 * Shared MJML page layout for all outgoing emails.
 * `body` is raw MJML section markup that gets dropped into the content column.
 */
export function emailLayout(opts: {
  title: string
  preheader: string
  body: string
  footerText?: string
}): string {
  return `
<mjml>
  <mj-head>
    <mj-title>${opts.title}</mj-title>
    <mj-preview>${opts.preheader}</mj-preview>
    <mj-attributes>
      <mj-all font-family="Helvetica, Arial, sans-serif" />
      <mj-text font-size="15px" line-height="1.6" color="#334155" />
      <mj-button background-color="#0f766e" color="#ffffff" font-size="15px" font-weight="600" border-radius="6px" inner-padding="12px 24px" />
      <mj-section padding="0 24px" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f1f5f9" width="600px">
    <mj-wrapper full-width="full-width" background-color="#0f172a" padding="24px">
      <mj-section>
        <mj-column>
          <mj-text font-size="18px" font-weight="700" color="#ffffff">HVAC Services</mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>

    <mj-section padding="32px 24px 8px">
      <mj-column>
        <mj-text font-size="22px" font-weight="700" color="#0f172a">${opts.title}</mj-text>
      </mj-column>
    </mj-section>

    ${opts.body}

    <mj-section padding="24px">
      <mj-column>
        <mj-text font-size="12px" color="#94a3b8">
          ${opts.footerText ?? '© HVAC Services — This message was sent from our website enquiry form.'}
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`.trim()
}
