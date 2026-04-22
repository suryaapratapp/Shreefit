import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ShreeFit - Fitness for Parents | Hindi Online Fitness Classes",
    template: "%s | ShreeFit",
  },
  description:
    "Hindi-first online fitness and wellness classes for Indian parents aged 50+. Safe movement, yoga-inspired guidance, mobility, flexibility and breathwork from certified Ayurveda and Yoga experts.",
  keywords: seoKeywords,
  openGraph: {
    title: "ShreeFit - Fitness for Parents",
    description:
      "Safe, structured Hindi live fitness and wellness classes for Indian parents, guided by certified Ayurveda and Yoga experts.",
    url: site.url,
    siteName: site.fullName,
    images: [
      {
        url: "/images/shreefit-parents-hero.png",
        width: 1792,
        height: 1024,
        alt: "Indian parents doing guided online wellness movement at home",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShreeFit - Fitness for Parents",
    description: "Hindi live online fitness and wellness classes for parents aged 50+.",
    images: ["/images/shreefit-parents-hero.png"],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
