# Norman John Gutierrez — Portfolio

Professional portfolio site for a Senior Full Stack Engineer. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

- Hero with rotating typing cursor for key skills
- About, Experience, Skills, Education, and Contact sections
- **WhatsApp** contact (not phone) — opens chat via `wa.me`
- Light / dark mode toggle
- Responsive layout with scroll fade-in animations
- Contact form sends email to your inbox (via [Web3Forms](https://web3forms.com))

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or newer
- npm (included with Node.js)

## Contact form setup (required for Send Message)

1. Go to [web3forms.com](https://web3forms.com) and create a free access key using **normanjg1997@gmail.com** (or the inbox you want messages in).
2. Copy `.env.example` to `.env.local`:

```bash
copy .env.example .env.local
```

3. Paste your key in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

4. Restart the dev server (`npm run dev`). The form submits **from the browser** directly to Web3Forms (server-side calls are blocked by Cloudflare).

For production (Vercel), add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` under **Project → Settings → Environment Variables**.

## Run locally

```bash
cd c:\portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Deploy (Vercel — recommended)

1. Push this folder to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) and import the repo.
3. Vercel auto-detects Next.js — use default settings and deploy.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Customize

| Item | File |
|------|------|
| Resume content, WhatsApp, email | `src/data/portfolio.ts` |
| Profile photo | Replace placeholder in `src/components/About.tsx` or add an image under `public/` |
| Colors / theme | `tailwind.config.ts` |

## Contact data

- **Email:** normanjg1997@gmail.com
- **WhatsApp:** [+63 947 889 9271](https://wa.me/639478899271)
- **LinkedIn:** [norman-gutierrez](https://www.linkedin.com/in/norman-gutierrez-9a4067407/)
