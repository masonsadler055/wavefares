import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WaveFares handles data: no accounts, no booking data, privacy-respecting analytics and clearly labeled ads.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold text-deep">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 22, 2026</p>

      <div className="mt-6 space-y-6 leading-relaxed text-slate-700">
        <section>
          <h2 className="font-display text-2xl font-bold text-deep">The short version</h2>
          <p className="mt-2">
            WaveFares has no accounts, no checkout and no booking forms — so we never see your name,
            payment details or travel documents. When you click a deal, you leave our site and book on
            the cruise line&apos;s own website, and their privacy policy applies there.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">What we collect</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>
              <strong>Basic server logs</strong> (IP address, browser type, pages visited) kept by our
              hosting provider for security and reliability.
            </li>
            <li>
              <strong>Aggregate analytics</strong> about which ports, destinations and deals get
              viewed, so we know which fares to check more often.
            </li>
            <li>
              <strong>Affiliate click data.</strong> When you click an outbound deal link, our
              affiliate partners (such as Sovrn //Commerce) may set cookies to attribute a resulting
              booking to WaveFares so we can be paid. Those cookies are governed by the partner&apos;s
              and the cruise line&apos;s policies.
            </li>
            <li>
              <strong>Advertising cookies.</strong> If display ads are active (Google AdSense), Google
              may use cookies to serve and measure ads, as described in Google&apos;s policies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">What we never do</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>We never sell personal information — we barely collect any.</li>
            <li>We never see or store payment card details; bookings happen on cruise line sites.</li>
            <li>We don&apos;t require sign-up to browse any part of this site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">Your choices</h2>
          <p className="mt-2">
            You can block or clear cookies in your browser at any time; the site works the same,
            though affiliate attribution (how we get paid) may not register. Questions about this
            policy can be sent via the contact details on the site&apos;s home page footer.
          </p>
        </section>
      </div>
    </div>
  );
}
