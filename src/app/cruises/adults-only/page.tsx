import type { Metadata } from "next";
import HubShell from "@/components/HubShell";
import { adultsOnlySailings } from "@/data";

export const metadata: Metadata = {
  title: "Adults-Only Cruises — 18+ Sailings, No Kids, Fares Checked Daily",
  description:
    "Adults-only cruise deals from U.S. ports: Virgin Voyages (18+ fleet-wide) and other grown-ups-only sailings. Real fares checked daily; book on Priceline Cruises.",
  alternates: { canonical: "/cruises/adults-only" },
};

export default function AdultsOnlyPage() {
  return (
    <HubShell
      title="Adults-Only Cruises"
      path="/cruises/adults-only"
      intro="No kids' clubs, no waterslide lines — these sailings are 18+ by design. Virgin Voyages runs an adults-only fleet, and a handful of other lines offer grown-ups-only voyages. Every fare below was checked against the line's published price."
      sailings={adultsOnlySailings()}
      emptyNote="No adults-only sailings are in today's fare check — check back after the next daily update."
    />
  );
}
