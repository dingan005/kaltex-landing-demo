# KALTEX Insurance Consultancy — React landing page demo

Premium responsive landing page built with React + Vite. Designed as a client preview/prototype, not a final insurance transaction platform.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Before client approval / production

- Confirm official company spelling, logo asset, brand colours and whether “Tomex” belongs on the website.
- Confirm business email, office address, working hours and social links.
- Confirm which insurance services and insurer relationships the business is authorised to advertise.
- Replace/approve stock photography and review all marketing claims with the client.
- `src/App.jsx`: update `OFFICIAL_EMAIL` with the verified email address. WhatsApp number is set from the poster to `+91 9497771183`.
- Current enquiry form prepares a WhatsApp message; it does not store form submissions or email them to the company.
- Images are loaded from Unsplash over the internet. For production, consider downloading/licensing and self-hosting approved image assets.
