# GitHub Workflow Documentation

## **📌 Overview**
This document outlines the **GitHub workflow** for **Alterera Networks Pvt. Ltd**, ensuring a structured development process. It applies to both the **admin** and the **team**.

---

## **📁 Branching Strategy**
### **1. Main Branches**
- **`main`** → Production-ready code. Only tested and approved features go here.
- **`dev`** → Active development branch. Features are merged here before going to `main`.
- **`alpha`** → Alpha code workspace. All tasks are pushed here first.

### **2. Feature Branches (For Each Task)**
Team should create a new feature branch from `alpha` for every task:
```
feature/alpha-task-name
```
🔹 Example: `feature/add-navbar`

---

## **💼 Workflow for the Team**

### **1️⃣ Cloning the Repository**
Before starting, clone the repository:
```bash
git clone https://github.com/Alterera/Vivekanand-School.git

cd Vivekanand-School

git checkout alpha  # Switch to alpha branch

```
To fetch latest codebase, run
```bash
git pull origin alpha
```

### **2️⃣ Creating a Feature Branch**
Each task must have its own branch:
```bash
git checkout -b feature/task-name
```
🔹 Example: `feature/fix-footer`

### **3️⃣ Running Locally**
```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Setup and Operations

The site is a Next.js 16 App Router project with content in Sanity (studio in `sanity/`), deployed on Vercel.

### Environment variables

Set these in `.env.local` for development and in Vercel → Project → Settings → Environment Variables for production. See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `EMAIL_USER` | Gmail address that sends form emails |
| `EMAIL_PASSWORD` | Gmail App Password for `EMAIL_USER` |
| `ADMIN_EMAIL` | Inbox that receives admission, schedule-a-call, and contact submissions |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project (defaults to `vynrfzal`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (defaults to `production`) |
| `SANITY_REVALIDATE_SECRET` | Shared secret for the Sanity publish webhook |

### Content caching and the Sanity webhook

Pages read Sanity through `sanityFetch` in `lib/sanity.ts`. Responses are cached for up to an hour and tagged by document type (`blog`, `event`, `curricular`, `legal`, `gallery`, `feeStructure`, `sports`, `hero`, `mandatoryDisclosure`).

To make published changes appear immediately, create a webhook in Sanity (manage.sanity.io → project → API → Webhooks):

- URL: `https://stvivekanandschool.com/api/revalidate`
- Dataset: `production`
- Trigger on: Create, Update, Delete
- Filter: leave empty (all documents)
- Projection: `{_type, "slug": slug.current}`
- HTTP method: `POST`
- Secret: the same value as `SANITY_REVALIDATE_SECRET`

Without the webhook, content still refreshes within an hour.

### Form spam protection

`/api/admission`, `/api/schedule-call`, and `/api/contact` validate input, escape all values in the email HTML, drop submissions that fill the hidden honeypot field, and apply a best-effort in-memory limit of 5 requests per 10 minutes per IP.

Serverless instances do not share memory, so also add a Vercel Firewall rule (Vercel → Project → Firewall → Configure → New Rule):

- If: Request Path starts with `/api/` **and** Method equals `POST`
- Then: Rate Limit, fixed window, 10 requests per 60 seconds, keyed by IP, action Deny (429)

### Security headers

`next.config.ts` sends HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, and a Content Security Policy in **report-only** mode. After a week with no CSP violations in the browser console (check the home page video, gallery, contact map, and analytics), rename the header to `Content-Security-Policy` to enforce it. If you add a new third-party service, add its host to the matching directive first.

### Images

- Use `next/image` with a `sizes` prop for every image; use `preload` only for the single largest above-the-fold image.
- Keep files in `public/` small. `scripts/optimize-images.mjs` converts heavy PNG/JPEG files to WebP (max 1920px) and regenerates the 1200×630 Open Graph image:

```bash
node scripts/optimize-images.mjs
```

Update references to the new `.webp` files, then delete the originals.

### SEO conventions

- Page metadata comes from `pageMetadata()` in `lib/seo.ts`. Pass a short `title` (the helper adds "| St. Vivekanand School Bikaner") and the page `path` for the canonical URL.
- Structured data helpers live in `lib/jsonld.ts` and render through `components/JsonLd.tsx`.
- `app/sitemap.ts` lists static routes; add new pages there and bump `STATIC_LAST_MODIFIED` when page copy changes.
- Each page should have exactly one `<h1>`.
