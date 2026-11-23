import type { Metadata } from "next";
import HubShell from "@/components/HubShell";
import { luxurySailings } from "@/data";

export const metadata: Metadata = {
  title: "Luxury Cruises — Premium Lines, Fares Checked Daily",
  description:
    "Luxury and ultra-luxury cruise deals from U.S. ports: Regent Seven Seas, Seabourn, Silversea, Oceania, Celebrity, Princess and more — fares checked daily, book on Priceline Cruises.",
  alternates: { canonical: "/cruises/luxury" },
};

export default function LuxuryPage() {
  return (
    <HubShell
      title="Luxury Cruises"
      path="/cruises/luxury"
      intro="The premium end of the fare board: luxury and ultra-luxury lines like Regent Seven Seas, Seabourn, Silversea and Oceania, plus the premium fleets of Celebrity, Princess and Holland America. Same rules as everywhere on WaveFares — real fares, checked daily, and you book on Priceline Cruises."
      sailings={luxurySailings()}
      emptyNote="No luxury sailings are in today's fare check — the daily check adds them as lines publish new fares."
    />
  );
}
