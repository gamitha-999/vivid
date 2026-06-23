# iPhone Filters Studio

A premium web application for previewing and applying Apple iPhone camera filters on your photos in real time — entirely in the browser.

Built with Next.js (static export), TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, and Zustand. Fully client-side — no backend, no server, no API routes.

---

## Features

- **10 iPhone Filter Presets** — Original, Vivid, Vivid Warm, Vivid Cool, Dramatic, Dramatic Warm, Dramatic Cool, Mono, Silvertone, Noir
- **Real-time Preview** — instant filter application via CSS and Canvas pixel manipulation
- **Side-by-Side Compare** — touch-compatible before/after slider
- **Intensity Slider** — custom filter strength adjustment
- **Export** — download full-resolution PNG or JPG
- **3D Hero** — Three.js floating card effects (desktop only)
- **Dark Mode** — system-aware with manual toggle
- **Mobile-First** — bottom nav bar, swipeable filter gallery, safe area insets
- **Custom Cursor** — with trail and click particles (desktop only)
- **Background Effects** — gradient mesh, aurora lights, particles, noise overlay

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Static output is generated in the `out/` folder.

You can preview it locally:

```bash
npm run start
```

---

## Deploy to GitHub Pages

### Manual

```bash
npm run build
npx gh-pages -d out -t true
```

Alternatively, you can upload the contents of the `out/` folder directly to a GitHub Pages branch.

---

## Repository Structure

```
repo/
├── src/
│   ├── app/                        # Next.js App Router pages
│   ├── components/
│   │   ├── effects/               # Aurora, GradientMesh, Particles, NoiseOverlay
│   │   ├── features/              # ImageUpload, FilterPreview, FilterGallery, ExportPanel, etc.
│   │   ├── gallery/               # InfiniteGallery, MasonryGrid
│   │   ├── layout/                # Header, Footer, ClientLayout, ScrollProgress, PageTransition
│   │   ├── three/                 # Hero3D, PhotoReel3D
│   │   └── ui/                    # CustomCursor, GlassButton, GlassCard, ThemeToggle
│   ├── hooks/                     # useMediaQuery, useAnimation, useMousePosition, useParallax
│   ├── lib/                       # filters.ts, constants.ts, utils.ts
│   └── store/                     # zustand stores (imageStore, filterStore, uiStore)
├── next.config.ts                 # Static export config
└── package.json
```

---

## Configuration

### Environment Variables (optional)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Override the base path (e.g. `/my-repo`) for testing custom domains |
| `GITHUB_REPOSITORY` | Auto-set in CI; used to derive the base path |

The `next.config.ts` automatically detects the GitHub repository from `GITHUB_REPOSITORY` and sets the correct base path. For a user site (`username.github.io`), no base path is needed.

---

## Tech Stack

- **Next.js 16** — static site generation (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **GSAP** — scroll-triggered animations
- **Three.js / React Three Fiber** — 3D hero effects
- **Zustand** — state management
- **React Dropzone** — file upload
- **Lucide React** — icons
- **Canvas API / CSS Filters** — image processing

---

## License

MIT. Not affiliated with Apple Inc.
