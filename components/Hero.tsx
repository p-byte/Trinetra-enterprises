"use client";

import { business } from "@/config/business";
import { useI18n } from "@/utils/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(225,29,47,.32),transparent_30rem)]" />
      <div className="container relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex rounded-full border border-ember/40 bg-ember/10 px-4 py-2 text-sm font-bold text-red-100">
            {t("Wholesale & Retail Security, Lighting, Fire Safety and Electronics")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            {t("Trusted Wholesale & Retail CCTV, Fire Safety & Technology Solutions")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {t("Complete Security, Surveillance, Lighting, Fire Safety & Refurbished Laptop Solutions Under One Roof")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.whatsapp} className="shine inline-flex items-center justify-center gap-2 rounded-lg bg-ember px-6 py-4 font-bold shadow-glow transition hover:bg-red-600"><MessageCircle /> {t("Contact on WhatsApp")}</a>
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/8 px-6 py-4 font-bold transition hover:border-white/30 hover:bg-white/12">{t("View Products")} <ArrowRight /></a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-ink transition hover:bg-red-50">{t("Get Quote")} <Send /></a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="glass rounded-[2rem] p-3">
            <Image src="/assets/hero/security-showcase.svg" width={1200} height={760} priority alt="CCTV, lighting, fire safety and laptop visuals" className="h-auto w-full rounded-[1.5rem]" />
          </div>
          {["CCTV", "Fire Safety", "LED Lights", "Laptops"].map((item, index) => (
            <motion.span
              key={item}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3 + index * 0.3, repeat: Infinity }}
              className="absolute rounded-lg border border-white/12 bg-ink/85 px-4 py-3 text-sm font-black shadow-glass backdrop-blur"
              style={{ left: `${8 + index * 20}%`, bottom: `${5 + (index % 2) * 18}%` }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
