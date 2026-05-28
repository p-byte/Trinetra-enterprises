"use client";

import { business } from "@/config/business";
import { useI18n } from "@/utils/i18n";
import { Instagram, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Overview", "#overview"],
  ["Products", "#products"],
  ["Brands", "#brands"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/assets/brands/trinetra-mark.svg" alt="Trinetra Enterprises logo" width={44} height={44} className="h-11 w-11 rounded-lg shadow-glow" priority />
          <span>
            <span className="block font-display text-lg font-black tracking-wide">{business.name}</span>
            <span className="block text-xs uppercase text-white/55">{t("N Durga Prasad")}</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-white/72 transition hover:text-white">
              {t(label)}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => setLang(lang === "en" ? "kn" : "en")} className="rounded-lg border border-white/10 bg-white/7 px-4 py-3 text-sm font-black transition hover:bg-white/12">
            {lang === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
          <a aria-label="Instagram" href={business.instagram} className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:border-ember hover:bg-ember/20">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={`tel:${business.phones[0]}`} className="shine flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-ink transition hover:bg-ember hover:text-white">
            <Phone className="h-4 w-4" /> {t("Call Now")}
          </a>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/96 p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <strong>{business.name}</strong>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-lg border border-white/10">
              <X />
            </button>
          </div>
          <div className="mt-10 grid gap-4">
            {links.map(([label, href]) => (
            <a key={href} onClick={() => setOpen(false)} href={href} className="rounded-lg border border-white/10 bg-white/5 p-4 text-lg font-bold">
                {t(label)}
              </a>
            ))}
            <button onClick={() => setLang(lang === "en" ? "kn" : "en")} className="rounded-lg border border-white/10 bg-ember p-4 text-lg font-bold">
              {lang === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ" : "Change to English"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
