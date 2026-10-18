import mjml2html from 'mjml'

/**
 * Escape a value for safe interpolation into HTML/MJML templates.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Replace `{{ key }}` (and nested `{{ user.name }}`) placeholders with
 * HTML-escaped values from the context.
 */
export function interpolate(
  template: string,
  context: Record<string, unknown>,
): string {
  return template.replace(
    /\{\{\s*([\w.]+)\s*\}\}/g,
    (_match, key: string) => {
      const value = key
        .split('.')
        .reduce<unknown>(
          (acc, part) =>
            acc && typeof acc === 'object'
              ? (acc as Record<string, unknown>)[part]
              : undefined,
          context,
        )
      return value == null ? '' : escapeHtml(value)
    },
  )
}

/**
 * Render an MJML template with interpolated context into
 * `{ html, text }` ready to hand to Nodemailer.
 * (MJML 5's `mjml2html` is async.)
 */
export async function renderMjml(
  template: string,
  context: Record<string, unknown> = {},
): Promise<{ html: string; text: string }> {
  const source = interpolate(template, context)
  const { html, errors } = await mjml2html(source, { minify: true })

  if (errors.length > 0) {
    console.warn('[mail] MJML validation warnings:', errors)
  }

  // Plain-text fallback for clients that don't render HTML.
  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return { html, text }
}
