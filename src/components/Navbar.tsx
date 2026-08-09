import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/specials", label: "Specials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto liquid-glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="font-sora font-semibold tracking-tight text-slate-900">
              Pro<span className="text-gradient-cyan">Computing</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active
                      ? "text-slate-900 bg-slate-900/10"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/specials"
              className="hidden sm:inline-flex items-center gap-2 liquid-glass-glow rounded-full px-4 py-2 text-sm font-medium text-slate-900 hover:text-cyan-300 transition-colors group overflow-hidden relative"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="relative block h-4 overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Request Call Back
                </span>
                <span className="block absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Let's Talk
                </span>
              </span>
            </Link>
            <button
              className="md:hidden text-slate-900 p-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden fixed inset-x-4 bottom-4 z-50 liquid-glass rounded-3xl p-4"
          >
            <div className="grid gap-1">
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm ${
                      active ? "bg-slate-900/10 text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
