# Dagim Abraham — Portfolio (Next.js)

This repository now contains a Next.js (App Router) TypeScript app using Tailwind CSS. The original static site (Bootstrap template) was migrated into this project and assets are served from `public/assets`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment (Netlify)

- You can continue using Netlify. Update the site settings:
  - Build command: `npm run build`
  - Publish directory: leave empty (Netlify will detect Next.js and use plugin)
  - Enable the `@netlify/plugin-nextjs` in your Netlify build plugins or use the official Next.js support.
  - Set environment variables in Netlify's site settings (SMTP/SendGrid keys, `CONTACT_TO`).

Alternatively, Vercel provides first-class support for Next.js and is recommended for frictionless deployment.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
