import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/business";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Trinetra Enterprises | Wholesale & Retail CCTV, Fire Safety & Electronics Store in Sindhanur",
  description:
    "Trinetra Enterprises provides CCTV cameras, fire extinguishers, lighting products, security systems, and refurbished laptops in Sindhanur. Wholesale & retail solutions for homes and businesses.",
  openGraph: {
    title: "Trinetra Enterprises | CCTV, Fire Safety & Electronics Store",
    description:
      "Wholesale and retail CCTV, lighting, fire safety, electronics and refurbished laptop solutions in Sindhanur.",
    url: "http://localhost:3000",
    siteName: "Trinetra Enterprises",
    images: [{ url: "/assets/hero/security-showcase.svg", width: 1200, height: 760 }]
  },
  icons: {
    icon: "/assets/brands/trinetra-mark.svg",
    shortcut: "/assets/brands/trinetra-mark.svg",
    apple: "/assets/brands/trinetra-mark.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    founder: business.owner,
    description: business.type,
    telephone: business.phones,
    email: business.email,
    address: business.address,
    url: `https://${business.website}`,
    sameAs: [business.instagram],
    taxID: business.gst
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
