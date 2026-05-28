"use client";

import { business } from "@/config/business";
import { useI18n } from "@/utils/i18n";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const quickLinks = ["Overview", "Products", "Brands", "Gallery", "Contact"];
const categories = ["CCTV Cameras", "Fire Safety", "LED Lights", "Solar Lights", "Accessories", "Refurbished Laptops"];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-black/55 py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/brands/trinetra-mark.svg" alt="Trinetra Enterprises logo" width={48} height={48} className="h-12 w-12 rounded-lg" />
            <div>
              <h2 className="font-display text-2xl font-black">{business.name}</h2>
              <p className="text-sm text-white/52">{t("Owned by")} {business.owner}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/58">{business.type}. GST: {business.gst}</p>
          <p className="mt-5 text-sm text-white/42">Copyright © 2026 Trinetra Enterprises. {t("All rights reserved.")}</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t("Quick Links")}</h3>
          <div className="grid gap-3">
            {quickLinks.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/58 transition hover:text-white">{t(item)}</a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t("Contact")}</h3>
          <div className="grid gap-3 text-sm text-white/62">
            <a href={`tel:${business.phones[0]}`} className="flex gap-2"><Phone className="h-4 w-4 text-ember" /> {business.phones.join(" / ")}</a>
            <a href={`mailto:${business.email}`} className="flex gap-2"><Mail className="h-4 w-4 text-ember" /> {business.email}</a>
            <a href={business.instagram} className="flex gap-2"><Instagram className="h-4 w-4 text-ember" /> Instagram</a>
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-ember" /> {business.address}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => <span key={item} className="rounded-md bg-white/7 px-3 py-1 text-xs text-white/58">{t(item)}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
