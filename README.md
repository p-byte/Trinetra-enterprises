# Trinetra Enterprises Website

Premium offline-ready Next.js website for N Durga Prasad - Trinetra Enterprises.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Docker

```bash
docker compose up --build
```

Open `http://localhost:3000`.

The production image contains the compiled Next.js standalone server and local assets only. No external image URLs, font CDNs, icon CDNs, or runtime network assets are used.

## Editing Content

- Product cards: `data/products.json`
- Brands: `data/brands.json`
- Testimonials: `data/testimonials.json`
- Images: `public/assets/products`, `public/assets/gallery`, `public/assets/brands`, `public/assets/hero`, `public/assets/icons`
