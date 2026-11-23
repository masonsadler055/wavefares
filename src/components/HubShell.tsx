import Link from "next/link";
import type { Sailing } from "@/data/types";
import SailingExplorer from "./SailingExplorer";
import JsonLd, { breadcrumbLd, itemListLd } from "./JsonLd";
import { SITE_URL } from "@/app/layout";

interface Props {
  title: string;
  path: string; // e.g. "/cruises/luxury"
  intro: string;
  sailings: Sailing[];
  emptyNote: string;
}

/** Shared shell for the specialty hubs (/cruises/*). */
export default function HubShell({ title, path, intro, sailings, emptyNote }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd
        data={breadcrumbLd(
          [
            { name: "Home", path: "/" },
            { name: title, path },
          ],
          SITE_URL,
        )}
      />
      {sailings.length > 0 && <JsonLd data={itemListLd(sailings)} />}

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:underline">Home</Link> {" / "}
        <span aria-current="page" className="text-slate-700">{title}</span>
      </nav>

      <h1 className="mt-3 font-display text-4xl font-bold text-deep">{title}</h1>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{intro}</p>

      <div className="mt-8">
        {sailings.length > 0 ? (
          <SailingExplorer sailings={sailings} heading={title} />
        ) : (
          <p className="rounded-lg bg-sand p-6 text-slate-600">{emptyNote}</p>
        )}
      </div>
    </div>
  );
}
