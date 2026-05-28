"use client";

import { business } from "@/config/business";
import brands from "@/data/brands.json";
import testimonials from "@/data/testimonials.json";
import { useI18n } from "@/utils/i18n";
import { Award, BadgeIndianRupee, ExternalLink, Headphones, Instagram, Mail, MapPin, Phone, ShieldCheck, ShoppingBag, Star, Store, Truck } from "lucide-react";
import { FadeUp, MotionDiv } from "./Animated";
import { Hero } from "./Hero";
import { ProductExplorer } from "./ProductExplorer";
import { SectionHeading } from "./SectionHeading";

const features = [
  ["Genuine Products", ShieldCheck],
  ["Wholesale Pricing", BadgeIndianRupee],
  ["Retail Availability", Store],
  ["Trusted Supplier", Award],
  ["Expert Guidance", ShoppingBag],
  ["Fast Service", Truck],
  ["Affordable Pricing", Star],
  ["Customer Support", Headphones]
];

const stats = [
  ["Happy Customers", "1200+"],
  ["Products Available", "250+"],
  ["Product Categories", "22+"],
  ["Years of Service", "8+"]
];

export function HomePage() {
  const { t } = useI18n();
  return (
    <main>
      <Hero />
      <section id="overview" className="section border-y border-white/8 bg-white/[0.025]">
        <div className="container">
          <SectionHeading eyebrow="Company Overview" title="Offline Store Trust With Enterprise-Grade Product Guidance" copy="Trinetra Enterprises is a trusted wholesale and retail supplier in Sindhanur for CCTV security systems, surveillance products, lighting solutions, fire safety equipment, electronics and refurbished laptops." />
          <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
            <FadeUp className="glass rounded-2xl p-7">
              <h3 className="font-display text-3xl font-black">{t("Complete security and technology products under one roof.")}</h3>
              <p className="mt-5 leading-8 text-white/68">{t("Led by N Durga Prasad, the business supports homeowners, retail shops, offices, institutions and contractors with genuine products, affordable pricing, customer support, security solutions expertise, lighting products, fire safety essentials and value-focused refurbished laptops.")}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Trusted wholesale & retail supplier", "Offline store presence", "Genuine products", "Affordable pricing", "Customer support", "Security solutions expertise"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-black/22 p-4 text-sm font-bold text-white/78">{t(item)}</div>
                ))}
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(([label, value], index) => (
                <MotionDiv key={label} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-2xl p-6">
                  <div className="font-display text-4xl font-black text-ember">{value}</div>
                  <div className="mt-2 text-sm font-bold text-white/62">{t(label)}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="section">
        <div className="container">
          <SectionHeading eyebrow="Product Range" title="Wholesale and Retail Product Categories" copy="Search products, filter by category and open previews to send a quick enquiry." />
          <ProductExplorer />
        </div>
      </section>
      <section id="brands" className="section border-y border-white/8 bg-white/[0.025]">
        <div className="container">
          <SectionHeading eyebrow="Brands" title="Editable Brand Cards" copy="Popular security, electronics and laptop brands represented as local editable cards." />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand, index) => (
              <MotionDiv key={brand} whileHover={{ y: -7 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="glass shine rounded-xl p-6 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-lg bg-ember/18 text-xl font-black text-ember">{brand.slice(0, 2).toUpperCase()}</div>
                <h3 className="font-display text-lg font-black">{brand}</h3>
              </MotionDiv>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([label, Icon], index) => (
              <MotionDiv key={label as string} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }} className="glass rounded-xl p-5">
                <Icon className="mb-4 h-7 w-7 text-ember" />
                <h3 className="font-bold">{t(label as string)}</h3>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Store, Product and Installation Gallery" copy="Editable local gallery placeholders for CCTV installations, products, fire safety systems, lighting and refurbished laptops." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["CCTV installations", "CCTV products", "Fire extinguishers", "LED lights", "Solar lights", "Refurbished laptops"].map((item, index) => (
              <MotionDiv key={item} whileHover={{ scale: 1.025 }} className="glass aspect-[1.35] overflow-hidden rounded-xl p-6" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex h-full flex-col justify-between rounded-lg bg-gradient-to-br from-white/10 via-black/10 to-ember/28 p-5">
                  <span className="text-sm font-black uppercase text-white/54">Gallery</span>
                  <h3 className="font-display text-2xl font-black">{t(item)}</h3>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      <section className="section border-y border-white/8 bg-white/[0.025]">
        <div className="container">
          <SectionHeading eyebrow="Reviews" title="Customer Testimonials" copy="Modern review cards for business feedback, lead trust and local credibility." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, index) => (
              <FadeUp key={item.name} delay={index * 0.05} className="glass rounded-xl p-6">
                <div className="mb-4 flex gap-1 text-ember">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-sm leading-7 text-white/68">{item.review}</p>
                <h3 className="mt-5 font-bold">{item.name}</h3>
                <p className="text-xs text-white/44">{item.role}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container">
          <SectionHeading eyebrow="Contact" title="Get a Quote or Visit the Store" copy="Lead-generation contact section with call, WhatsApp, email, Instagram and map placeholder." />
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="grid gap-4">
              <a href={`tel:${business.phones[0]}`} className="glass rounded-xl p-5 font-bold"><Phone className="mb-3 text-ember" /> {business.phones.join(" / ")}</a>
              <a href={`mailto:${business.email}`} className="glass rounded-xl p-5 font-bold"><Mail className="mb-3 text-ember" /> {business.email}</a>
              <a href={business.instagram} className="glass rounded-xl p-5 font-bold"><Instagram className="mb-3 text-ember" /> Instagram: trinetra_snd</a>
              <div className="glass rounded-xl p-5"><MapPin className="mb-3 text-ember" /><p className="font-bold">{business.address}</p><p className="mt-3 text-sm text-white/55">{t("Business timings placeholder: 9:30 AM to 8:30 PM")}</p></div>
              <a href={business.googleMaps} target="_blank" rel="noreferrer" className="glass aspect-[1.8] rounded-xl p-5 transition hover:border-ember/40">
                <div className="grid h-full place-items-center rounded-lg bg-gradient-to-br from-ember/28 to-white/8 text-center">
                  <span>
                    <MapPin className="mx-auto mb-3 h-9 w-9 text-ember" />
                    <strong className="block font-display text-xl">{t("Open Store Location")}</strong>
                    <span className="mt-2 block text-sm font-bold text-white/58">{t("View Trinetra Enterprises on Google Maps")}</span>
                  </span>
                </div>
              </a>
            </div>
            <form className="glass rounded-2xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-ember" placeholder={t("Your name")} />
                <input className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-ember" placeholder={t("Phone number")} />
              </div>
              <input className="mt-4 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-ember" placeholder={t("Product requirement")} />
              <textarea className="mt-4 h-36 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-ember" placeholder={t("Message")}></textarea>
              <a
                href={business.googleForm}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-ember px-6 py-4 font-black text-white shadow-glow transition hover:bg-red-600"
              >
                <ExternalLink className="h-5 w-5" />
                {t("Submit via Google Form")}
              </a>
              <div className="mt-5 rounded-lg border border-dashed border-white/18 bg-black/22 p-5 text-center text-sm font-bold text-white/58">
                {t("Google Form responses can be linked to Google Sheets from the Google Forms Responses tab.")}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
