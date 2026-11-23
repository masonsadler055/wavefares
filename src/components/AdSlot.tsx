"use client";

import { useEffect } from "react";

/**
 * Google AdSense in-feed slot.
 *
 * Renders ONLY when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set — until the
 * AdSense account exists and is approved, feeds show no ad containers at
 * all. When enabled it reserves a fixed min-height (prevents layout shift)
 * and is clearly labeled "Advertisement".
 */
export default function AdSlot() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

  useEffect(() => {
    if (!client) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      /* AdSense script not loaded yet — slot stays as reserved space. */
    }
  }, [client]);

  if (!client) return null;

  return (
    <div
      className="flex min-h-[140px] flex-col overflow-hidden rounded-xl border border-dashed border-slate-300 bg-sand"
      role="complementary"
      aria-label="Advertisement"
    >
      <span className="bg-slate-100 px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        Advertisement
      </span>
      <div className="flex flex-1 items-center justify-center p-2">
        <ins
          className="adsbygoogle block w-full"
          style={{ display: "block", minHeight: 90 }}
          data-ad-client={client}
          data-ad-slot={slot || undefined}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
