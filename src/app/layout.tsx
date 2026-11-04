import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#0f2847",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Maa Durga Chemicals | Chemical Wholesaler & Distributor Kolkata | Organic & Inorganic",
    template: "%s | Maa Durga Chemicals Kolkata",
  },
  description:
    "Maa Durga Chemicals is Kolkata's premier chemical wholesaler and B2B distributor. Supplying pure Chapter 28 Inorganic (Caustic Soda, HCl, Sulphuric, Nitric Acid, Bleach) & Chapter 29 Organic Chemicals (Glacial Acetic Acid, Citric Acid, Solvents, IPA) with GST invoices, COA, and pan-India dispatch.",
  keywords: [
    "chemical wholesaler Kolkata",
    "chemical distributor West Bengal",
    "Maa Durga Chemicals",
    "industrial chemicals Kolkata",
    "organic chemicals supplier",
    "inorganic chemicals wholesaler",
    "HSN code chemicals India",
    "Chapter 28 inorganic chemicals",
    "Chapter 29 organic chemicals",
    "caustic soda flakes Kolkata",
    "hydrochloric acid supplier Kolkata",
    "sulphuric acid wholesaler",
    "glacial acetic acid Kolkata",
    "citric acid distributor India",
    "hydrogen peroxide supplier",
    "bleaching powder bulk price",
    "chemical wholesale market Kolkata",
    "Bagmari Kankurgachi chemical trader",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Maa Durga Chemicals | Leading Chemical Wholesaler in Kolkata",
    description:
      "Bulk supplier of pure Chapter 28 & Chapter 29 Industrial Chemicals in Kolkata. Serving wholesalers, retailers, and manufacturing plants with verified GST invoices and COA.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Durga Chemicals | Chemical Wholesaler Kolkata",
    description:
      "Wholesale & retail supplier of Organic (Ch 29) and Inorganic (Ch 28) industrial chemicals in Kolkata, West Bengal. Authentic HSN billing and pan-India dispatch.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": `${SITE_CONFIG.coordinates.latitude};${SITE_CONFIG.coordinates.longitude}`,
    ICBM: `${SITE_CONFIG.coordinates.latitude}, ${SITE_CONFIG.coordinates.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.shortDescription,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, RTGS, NEFT, UPI",
    openingHours: "Mo-Sa 09:30-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    hasMap: SITE_CONFIG.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Kolkata" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Inorganic Chemicals Chapter 28",
      "Organic Chemicals Chapter 29",
      "Caustic Soda",
      "Hydrochloric Acid",
      "Glacial Acetic Acid",
      "Citric Acid",
      "Sulphuric Acid",
      "Hydrogen Peroxide",
      "Solvents and Industrial Acids",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        <a href="#main-content" className="skip-link visually-hidden">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
