import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AmbientBackground } from "../components/AmbientBackground";
import { SmoothScroll } from "../components/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <AmbientBackground />
      <div className="max-w-md text-center liquid-glass rounded-3xl p-10">
        <h1 className="text-8xl font-display italic text-gradient-cyan">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-slate-600">This page drifted outside the network.</p>
        <a href="/" className="inline-block mt-6 liquid-glass-glow rounded-full px-5 py-2 text-sm">
          Return home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <AmbientBackground />
      <div className="max-w-md text-center liquid-glass rounded-3xl p-10">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-slate-600">Something went wrong on our end.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 liquid-glass-glow rounded-full px-5 py-2 text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProComputing — Enterprise IT, Cloud & Web Solutions" },
      {
        name: "description",
        content:
          "ProComputing (PTY) LTD delivers cloud infrastructure, IT hardware, web engineering, and managed IT services across South Africa.",
      },
      { property: "og:title", content: "ProComputing — Enterprise IT, Cloud & Web Solutions" },
      {
        property: "og:description",
        content:
          "Cloud backups, IT hardware, web engineering, hosting, CCTV and managed IT support from Durban, South Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ProComputing" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Sora:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://procomputing.co.za/#organization",
          name: "ProComputing (PTY) LTD",
          alternateName: "ProComputing",
          url: "https://procomputing.co.za/",
          logo: "https://procomputing.co.za/__l5e/assets-v1/117d6950-f707-4bca-86a6-8581a71ccbf3/og-home.jpg",
          image:
            "https://procomputing.co.za/__l5e/assets-v1/117d6950-f707-4bca-86a6-8581a71ccbf3/og-home.jpg",
          sameAs: [
            "https://www.facebook.com/procomputingsa",
            "https://www.tiktok.com/@kumargovender",
          ],
          description:
            "ProComputing delivers cloud backups, IT hardware supply, web engineering, hosting, CCTV and managed IT support across South Africa.",
          email: "info@procomputing.co.za",
          telephone: "+27844477308",
          address: {
            "@type": "PostalAddress",
            streetAddress: "394 Andrew Zondo Road",
            addressLocality: "Amanzimtoti",
            addressRegion: "KwaZulu-Natal",
            postalCode: "4126",
            addressCountry: "ZA",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+27844477308",
              email: "info@procomputing.co.za",
              contactType: "customer service",
              areaServed: "ZA",
              availableLanguage: ["English"],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <AmbientBackground />
      <Navbar />
      <main className="pt-24 overflow-x-hidden w-full relative">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
