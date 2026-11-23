import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wavefares.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WaveFares — Cruise Deals From Every U.S. Port, Checked Daily",
    template: "%s | WaveFares",
  },
  description:
    "Cruise deals from all 20 major U.S. homeports with fares checked daily. We don't sell cruises — find your fare here, then book direct with the cruise line.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "WaveFares",
    type: "website",
    title: "WaveFares — Cruise Deals From Every U.S. Port",
    description:
      "Real cruise fares from all 20 U.S. homeports, checked daily. Book direct with the cruise line — we never add fees.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // MONETIZATION SWITCHES — both are env-gated and off until accounts exist.
  // Sovrn //Commerce is the PRIMARY revenue switch: its script converts
  // outbound cruise links into commission-earning affiliate links.
  const sovrnKey = process.env.NEXT_PUBLIC_SOVRN_API_KEY;
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {sovrnKey && (
          <Script
            src={`https://cdn.viglink.com/api/vglnk.js?key=${sovrnKey}`}
            strategy="lazyOnload"
          />
        )}
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
