# ProComputing 🚀

An enterprise-grade web platform for **ProComputing** — a leading provider of Managed IT Support, Cloud Backups, Hardware Procurement, Web Engineering, Hosting, and CCTV & Security Systems based in Durban, South Africa.

Developed by **[Danjuma Ashiwaju](https://kavaradigital.com/)** ([Kavara Digital](https://kavaradigital.com/)).

---

## 📌 Project Overview

ProComputing is a modern, high-performance web application designed to showcase enterprise technology services, hardware products, company methodology, and client inquiry channels. Built with state-of-the-art web technology, it provides a fluid, responsive user experience complete with smooth scroll animations, optimized media loading, dynamic routing, and search engine optimization (SEO).

### Key Pages & Routes

- **Home (`/`)**: High-impact hero section, core IT services preview, featured hardware products, and strategic process overview.
- **Services (`/services`)**: In-depth breakdown of IT services including Cloud Backups, Hardware Procurement, Web Design, Managed Maintenance, Hosting & Domain management, and CCTV Security Systems.
- **About (`/about`)**: Company vision, core values, technical leadership, and history.
- **Process (`/process`)**: 4-step strategic IT deployment framework (Audit & Assess, Architect & Plan, Deploy & Integrate, Monitor & Support).
- **Specials (`/specials`)**: Curated enterprise hardware deals and seasonal promotions.
- **Contact (`/contact`)**: Interactive inquiry forms, office location details, and direct support contacts.
- **Sitemap (`/sitemap.xml`)**: Automatically generated server-side SEO sitemap.

---

## 🛠️ Tech Stack & Architecture

### Core Framework & Runtime

- **[TanStack Start](https://tanstack.com/router/latest/docs/framework/react/overview)**: Full-stack React framework delivering SSR and optimal performance.
- **[TanStack Router](https://tanstack.com/router)**: Type-safe file-based routing system (`@tanstack/react-router`).
- **[React 19](https://react.dev/)**: Modern UI library utilizing concurrent rendering features.
- **[Bun](https://bun.sh/)**: Fast all-in-one JavaScript runtime, package manager, and test runner.

### Data Fetching & State

- **[TanStack React Query](https://tanstack.com/query)**: Asynchronous state management and caching solution.

### Styling & UI Systems

- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework integrated via `@tailwindcss/vite`.
- **[Radix UI](https://www.radix-ui.com/)**: Accessible unstyled primitives for UI dialogs, dropdowns, accordions, and modals.
- **[Lucide React](https://lucide.dev/)**: Enterprise icon library.

### Motion & Visual Engineering

- **[Motion](https://motion.dev/)**: Framer Motion successor powering page transitions and scroll animations.
- **[GSAP](https://greensock.com/gsap/)**: Advanced timeline animations.
- **[Lenis](https://lenis.darkroom.engineering/)**: Smooth scrolling engine integration.

### Form Handling & Validation

- **[React Hook Form](https://react-hook-form.com/)**: Performant form state control.
- **[Zod](https://zod.dev/)**: Schema-first TypeScript validation library.

### Build Tools & Image Optimization

- **[Vite 8](https://vitejs.dev/)** & **[Nitro](https://nitro.unjs.io/)**: Fast server engine and bundle pipeline.
- **[vite-imagetools](https://github.com/JonasKruckenberg/imagetools)**: Automated WebP conversion and responsive `srcset` generation.

---

## 📁 Project Structure

```text
procomputing/
├── .agents/             # Agentic capabilities and team workflows
├── public/              # Static assets (favicons, robots.txt, manifest)
├── src/
│   ├── assets/          # High-resolution media assets processed by imagetools
│   ├── components/      # Reusable UI components (Navbar, Footer, ImageCard, Section, etc.)
│   │   └── ui/          # Radix UI primitive wrappers and design system tokens
│   ├── hooks/           # Custom React hooks (e.g., GSAP animation hooks)
│   ├── lib/             # Utility functions and class mergers (clsx, tailwind-merge)
│   ├── routes/          # TanStack Router file-based route definitions
│   │   ├── __root.tsx   # Root layout shell (Navbar, Footer, Ambient Background)
│   │   ├── index.tsx    # Home page
│   │   ├── about.tsx    # About page
│   │   ├── services.tsx # Services page
│   │   ├── process.tsx  # Process page
│   │   ├── specials.tsx # Specials page
│   │   ├── contact.tsx  # Contact page
│   │   └── sitemap[.]xml.ts # Dynamic XML sitemap endpoint
│   ├── styles.css       # Design tokens, keyframe animations, typography rules
│   ├── router.tsx       # TanStack Router instance creation
│   ├── server.ts       # Nitro server handler entry point
│   └── start.ts        # TanStack Start application bootstrapper
├── bunfig.toml          # Bun configuration file
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment setup
└── vite.config.ts       # Vite & TanStack plugin pipeline
```

---

## 🚦 Getting Started

### Prerequisites

- **[Bun](https://bun.sh/)** v1.0+ installed globally on your machine.

### Installation

Clone the repository and install dependencies using **Bun**:

```bash
git clone <repository-url>
cd procomputing
bun install
```

### Development Server

Start the local development server with hot module replacement (HMR):

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the URL output in your terminal) in your browser.

---

## ⚙️ Available Scripts

Always use `bun` to run scripts in this project:

| Command             | Description                                               |
| :------------------ | :-------------------------------------------------------- |
| `bun run dev`       | Starts the Vite / TanStack Start local development server |
| `bun run build`     | Compiles the production build via Nitro & Vite            |
| `bun run build:dev` | Compiles the build target in development mode             |
| `bun run preview`   | Serves the locally built production output                |
| `bun run lint`      | Runs ESLint checks across the project codebase            |
| `bun run format`    | Runs Prettier to automatically format code                |

---

## 🌐 Deployment

This project is configured for seamless deployment on platforms supporting Nitro server targets such as **Vercel**:

```bash
bun run build
```

The output build in `.output` or `.vercel` is ready for zero-config hosting.

---

## 👨‍💻 Developer Attribution

Developed with precision and excellence by:

**Danjuma Ashiwaju**  
_Founder & Lead Engineer at Kavara Digital_  
🌐 Website: [https://kavaradigital.com/](https://kavaradigital.com/)

---

© ProComputing. All rights reserved.
