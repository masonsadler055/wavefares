import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — How WaveFares Makes Money",
  description:
    "WaveFares is free because outbound cruise links may earn us a commission at no extra cost to you. Here's exactly how that works.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold text-deep">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 22, 2026</p>

      <div className="mt-6 space-y-6 leading-relaxed text-slate-700">
        <section>
          <h2 className="font-display text-2xl font-bold text-deep">How we make money</h2>
          <p className="mt-2">
            WaveFares is a free site, and it stays free because of affiliate links. When you click a
            “View Deal” button (or any other outbound cruise link on this site) and go on to book with
            the cruise line, the cruise line may pay us a commission for sending you.{" "}
            <strong>That commission comes out of the cruise line&apos;s marketing budget — it never
            adds a cent to your fare.</strong> You pay exactly what you would pay if you had typed the
            cruise line&apos;s address into your browser yourself.
          </p>
          <p className="mt-2">
            Outbound links on WaveFares are routed through affiliate technology (including Sovrn
            //Commerce) that can convert a regular cruise-line link into a commission-earning link at
            the moment you click it. Not every link earns a commission, and commissions never change
            which sailings we list, how we rank them, or the fares we show — fares come from our daily
            checks of the lines&apos; published prices, and a sailing with no commission attached gets
            listed exactly the same way.
          </p>
          <p className="mt-2">
            We also run display advertising (clearly labeled “Advertisement”) once our ad account is
            active. Between affiliate commissions and ads, that&apos;s the whole business model: no
            booking fees, no markups, no selling your data.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">We are not a travel agency</h2>
          <p className="mt-2">
            WaveFares does not sell cruises, take bookings, or handle payments. Every booking is made
            directly between you and the cruise line on the line&apos;s own website, under the
            line&apos;s terms. Questions about an existing booking — changes, cancellations, refunds —
            go to the cruise line, because your contract is with them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">About the fares shown</h2>
          <p className="mt-2">
            Fares are per person, based on double occupancy, for the lead (cheapest) cabin category,
            before taxes, port fees and gratuities unless stated otherwise. Cruise pricing changes
            constantly; each listing shows the date we last checked it, and the price on the cruise
            line&apos;s site when you book is the price that applies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-deep">Trademarks</h2>
          <p className="mt-2">
            Cruise line and ship names are trademarks of their respective owners. WaveFares is an
            independent deals site and is not affiliated with or endorsed by any cruise line.
          </p>
        </section>

        <p>
          See also our <Link href="/privacy" className="font-medium text-ocean underline">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}
