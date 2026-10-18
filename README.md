# HVAC — Nuxt 4 + shadcn-vue + Mailer

Nuxt 4 project with Tailwind CSS v4, [shadcn-vue](https://shadcn-vue.com) components, and a
Nodemailer + MJML mailing service for website enquiry emails.

## Stack

- **Nuxt 4** (Vue 3, TypeScript)
- **Tailwind CSS v4** (CSS-first config via `@tailwindcss/postcss`)
- **shadcn-vue** (reka-ui + lucide icons) — components in `app/components/ui/`
- **Nodemailer** — SMTP-agnostic sending (Gmail, SES, Mailgun, Postmark, Resend SMTP…)
- **MJML** — responsive email templates with `{{ variable }}` interpolation and auto-escaped values

## Getting started

```bash
pnpm install
cp .env.example .env   # fill in your SMTP credentials
pnpm dev               # http://localhost:3000
```

## Mailing

### How it's organised

| File | Purpose |
| --- | --- |
| `server/utils/mailer.ts` | Nodemailer transporter from runtime config; `sendMail()` helper |
| `server/utils/template.ts` | `renderMjml()` — MJML → HTML + plain-text, `{{ var }}` interpolation (HTML-escaped) |
| `server/emails/layout.ts` | Shared branded MJML page layout |
| `server/emails/enquiry.ts` | Enquiry notification (to you) + auto-reply (to the customer) |
| `server/api/enquiry.post.ts` | `POST /api/enquiry` — validates input, sends both emails |

### Configuration

Set in `.env` (see `.env.example` for provider examples including a local-dev MailHog setup):

```
NUXT_MAIL_HOST=smtp.example.com
NUXT_MAIL_PORT=587
NUXT_MAIL_SECURE=false
NUXT_MAIL_USER=enquiries@example.com
NUXT_MAIL_PASS=…
NUXT_MAIL_FROM="Your Company <enquiries@example.com>"
NUXT_MAIL_TO=inbox@example.com
```

### Sending an enquiry

`POST /api/enquiry` with JSON body:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "07123 456789",
  "subject": "AC service quote",
  "message": "Please quote for servicing two units."
}
```

Responds `{ "ok": true }` on success, `400` with a message on invalid input.

### Adding a new email template

1. Create a function in `server/emails/` that returns MJML (use `emailLayout()` for the shell):

   ```ts
   export async function welcomeEmail(data: { name: string }) {
     const subject = `Welcome, ${data.name}!`
     const mjml = emailLayout({
       title: 'Welcome',
       preheader: 'Thanks for signing up',
       body: `<mj-section padding="8px 24px 0">
         <mj-column><mj-text>Hi {{name}}, welcome aboard!</mj-text></mj-column>
       </mj-section>`,
     })
     return { subject, ...(await renderMjml(mjml, data)) }
   }
   ```

2. Send it from a server route or anywhere in `server/`:

   ```ts
   const email = await welcomeEmail({ name: 'Jane' })
   await sendMail({ to: 'jane@example.com', subject: email.subject, html: email.html, text: email.text })
   ```

## Project notes

- `app/assets/css/main.css` uses `@import "tailwindcss/index.css"` (explicit subpath) to work
  around a Vite 8 SSR build bug with bare package specifiers in CSS `@import`
  ([vitejs/vite#23096](https://github.com/vitejs/vite/issues/23096)); once fixed upstream it can
  go back to `@import "tailwindcss";`.
- shadcn-vue components live in `app/components/ui/` and are registered with
  `pathPrefix: false` (see `components.json` / `nuxt.config.ts`), so `<Card>`, `<Button>` etc.
  resolve directly. Add more with `pnpm dlx shadcn-vue@latest add <component>`.
