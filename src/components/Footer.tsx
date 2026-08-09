import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { getBusinessStatus, type BusinessStatus } from "../lib/business-hours";

export function Footer() {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getBusinessStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="px-4 sm:px-6 pb-6 mt-24">
      <footer className="relative max-w-7xl mx-auto rounded-[2.5rem] liquid-glass overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="anti-grid-blob w-[320px] h-[320px] rounded-full bg-[#7FB4FF] -top-16 -left-16 opacity-40" />
          <div className="anti-grid-blob w-[320px] h-[320px] rounded-full bg-[#7FE4EE] -bottom-16 -right-16 opacity-40" />
        </div>

        <div className="relative px-8 sm:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-sora font-semibold text-slate-900 text-lg">
                Pro<span className="text-gradient-cyan">Computing</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              ProComputing (PTY) LTD — engineering enterprise IT infrastructure across South Africa
              from our Durban headquarters.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" /> Business Hours
            </h4>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="relative flex h-2 w-2">
                {status?.isOpen && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    status?.isOpen ? "bg-emerald-400" : "bg-slate-400"
                  }`}
                />
              </span>
              <span className={status?.isOpen ? "text-emerald-600" : "text-slate-500"}>
                {status?.label ?? "Checking hours…"}
              </span>
            </div>
            <p className="text-sm text-slate-600">{status?.detail ?? ""}</p>
            <p className="text-xs text-slate-500 mt-1">
              Mon – Fri · 8am – 5pm
              <br />
              Sat · 8am – 12pm
              <br />
              Sun &amp; public holidays · Closed
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {(["/", "/about", "/services", "/process", "/specials", "/contact"] as const).map(
                (to, i) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-cyan-600 transition-colors">
                      {["Home", "About", "Services", "Process", "Specials", "Contact"][i]}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Contact Hub</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  394 Andrew Zondo Road,
                  <br />
                  Amanzimtoti, Durban, 4126
                </span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href="mailto:info@procomputing.co.za" className="hover:text-cyan-600">
                  info@procomputing.co.za
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href="tel:+27844477308" className="hover:text-cyan-600">
                  +27 8444 77308
                </a>
              </li>
              <li className="flex gap-2">
                <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/27844477308"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-600"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-slate-900/10">
          <div className="px-8 sm:px-12 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 2026 ProComputing (PTY) LTD. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://kavaradigital.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 transition-colors"
              >
                Kavara Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
