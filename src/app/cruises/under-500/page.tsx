import type { Metadata } from "next";
import HubShell from "@/components/HubShell";
import { under500Sailings } from "@/data";

export const metadata: Metadata = {
  title: "Cruises Under $500 Per Person — Budget Deals Checked Daily",
  description:
    "Every cruise on the board under $500 per person: short Bahamas hops, Western Caribbean value sailings and off-season steals from U.S. ports. Fares checked daily.",
  alternates: { canonical: "/cruises/under-500" },
};

export default function Under500Page() {
  return (
    <HubShell
      title="Cruises Under $500"
      path="/cruises/under-500"
      intro="The budget board: every sailing in our daily check priced under $500 per person. Short Bahamas runs, off-season Caribbean weeks and drive-to-port deals from Galveston, Tampa and Florida dominate this list — no flight required for millions of cruisers."
      sailings={under500Sailings()}
      emptyNote="Nothing under $500 in today's check — fares move daily, so this page changes fast."
    />
  );
}
