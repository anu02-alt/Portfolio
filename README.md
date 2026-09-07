# Anushka — Portfolio

A Next.js portfolio site: short bio, experience, certifications, publications,
education, projects, photo, and a get-in-touch section. Styled as a
finance/data "terminal dashboard" — dark ink-navy panels, amber/teal accents,
monospace data labels.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000** — the page hot-reloads as you edit.

## 2. Add your real content (do this before publishing)

Everything you'd normally hand-edit lives in **one file**:
`data/content.ts`. Every placeholder is marked `TODO`. Fill in:

- `profile.email`, `profile.linkedin`, `profile.github` — your real links
- `profile.avatar` — see step 3 below for your photo
- `profile.resumeFile` — see step 4 below
- `experience[]` — exact dates and bullet points from your resume
- `certifications[]` — issuing body and year for your AML certification
- `publications[]` — add entries, or leave empty (the section says "none listed yet")
- `education[]` — add coursework/honors if you want them shown
- `projects[]` — real GitHub/demo links for each project

## 3. Add your photo

Drop your photo into the `public/` folder (e.g. `public/photo.jpg`), then in
`data/content.ts` change:

```ts
avatar: '/photo.jpg',
```

Until you do this, a placeholder silhouette is shown.

## 4. Add your resume (optional but recommended)

Drop your resume PDF into `public/resume.pdf` (exact filename). The "Download
resume" button in the hero already points at `/resume.pdf`.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 6. Host it on GitHub Pages (already set up for you)

This repo includes `.github/workflows/deploy.yml`, which automatically builds
and publishes the site to GitHub Pages every time you push to `main`.

One-time setup on GitHub:

1. Go to your repo → **Settings → Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Push to `main` (or re-run the workflow from the **Actions** tab)
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/`

Notes:
- If you name your repo exactly `<your-username>.github.io`, it becomes your
  **root** user site instead — in that case, remove the
  `NEXT_PUBLIC_BASE_PATH=...` part of the `Build (static export)` step in
  `.github/workflows/deploy.yml`, since a root site doesn't need a subpath.
- The site is fully static (`output: 'export'` in `next.config.mjs`), which is
  what makes plain GitHub Pages hosting possible.

### Alternative: Vercel (no config needed, custom domains are easier)

If you'd rather not deal with GitHub Pages subpaths, Vercel hosts Next.js
directly:

1. Go to [vercel.com](https://vercel.com), sign in with GitHub
2. "Add New Project" → import your repo → Deploy
3. Done — no extra config needed (remove `output: 'export'` from
   `next.config.mjs` first if you want to use Vercel instead of Pages, though
   it works either way)

## Project structure

```
app/
  layout.tsx        Fonts, metadata, root HTML shell
  page.tsx           Assembles all sections
  globals.css        Theme, terminal grid background, base styles
components/
  Nav.tsx            Sticky top nav
  Hero.tsx            Name, rotating role line, short bio
  About.tsx           Photo + key-facts panel
  Experience.tsx      Timeline of roles
  Projects.tsx        Project cards (linked to GitHub if url is set)
  CertsAndPublications.tsx
  Education.tsx
  Contact.tsx         Email / LinkedIn / GitHub buttons
  Footer.tsx
data/
  content.ts          ALL editable content lives here
public/
  avatar-placeholder.svg   Swap for your real photo
.github/workflows/
  deploy.yml          Auto-deploy to GitHub Pages on push
```

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react icons
