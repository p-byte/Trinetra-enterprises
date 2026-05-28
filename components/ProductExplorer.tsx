"use client";

import products from "@/data/products.json";
import { useI18n } from "@/utils/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Product = (typeof products)[number];

export function ProductExplorer() {
  const { t } = useI18n();
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<Product | null>(null);
  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((p) => (category === "All" || p.category === category) && `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q));
  }, [query, category]);

  return (
    <div>
      <div className="glass mb-8 grid gap-4 rounded-xl p-4 lg:grid-cols-[1fr_auto]">
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-4">
          <Search className="h-5 w-5 text-white/50" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("Search CCTV, fire safety, lights, laptops...")} className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-white/38" />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-lg px-4 py-3 text-sm font-bold transition ${category === item ? "bg-ember text-white" : "bg-white/7 text-white/66 hover:bg-white/12"}`}>
              {t(item)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.025, 0.2) }}
            whileHover={{ y: -8 }}
            className="group glass overflow-hidden rounded-xl"
          >
            <button onClick={() => setActive(product)} className="block w-full text-left">
              <div className="relative aspect-[1.38] overflow-hidden bg-black">
                <Image src={product.image} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-lg bg-ember px-3 py-1 text-xs font-black">{t(product.badge)}</span>
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-black uppercase text-white/42">{t(product.category)}</p>
                <h3 className="font-display text-xl font-black">{t(product.title)}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/62">{t(product.description)}</p>
                <span className="mt-5 inline-flex rounded-lg bg-white px-4 py-3 text-sm font-black text-ink transition group-hover:bg-ember group-hover:text-white">{t("Enquire Now")}</span>
              </div>
            </button>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ y: 30, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 30, scale: 0.95 }} className="glass max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl p-4">
              <div className="flex justify-end">
                <button onClick={() => setActive(null)} className="grid h-11 w-11 place-items-center rounded-lg bg-white/10"><X /></button>
              </div>
              <div className="grid gap-6 p-2 md:grid-cols-2">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-black"><Image src={active.image} alt={active.title} fill className="object-cover" /></div>
                <div>
                  <p className="text-sm font-black uppercase text-ember">{t(active.category)}</p>
                  <h3 className="mt-2 font-display text-3xl font-black">{t(active.title)}</h3>
                  <p className="mt-4 leading-7 text-white/68">{t(active.description)}</p>
                  <a href={`https://wa.me/919606753323?text=Hello%20Trinetra%20Enterprises%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(active.title)}.`} className="mt-7 inline-flex rounded-lg bg-ember px-6 py-4 font-black">{t("Send Enquiry on WhatsApp")}</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
