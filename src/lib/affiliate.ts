import type { Sailing } from "@/data/types";

/**
 * AFFILIATE LINK ENGINE — the core of WaveFares.
 *
 * EVERY outbound cruise link on the site (View Deal, Check Cabin Prices,
 * Book Direct, and any port / destination / ship page link that leaves the
 * site) MUST be generated through this module. No page or component may
 * hardcode a raw outbound cruise URL.
 *
 * Today the helper returns the cruise line's plain official URL. This is
 * the single switch point where monetization applies:
 *
 *  1. Sovrn //Commerce (primary): when NEXT_PUBLIC_SOVRN_API_KEY is set,
 *     the Sovrn script embedded in the root layout automatically converts
 *     outbound links into commission-earning affiliate links at click time.
 *     No URL change is needed here for Sovrn.
 *  2. Direct affiliate programs (future): if a cruise line's direct program
 *     needs tagged URLs, the wrapping happens HERE and nowhere else —
 *     e.g. append the partner tag for that line in `outboundUrl`.
 *
 * Keeping one choke point means monetization can be switched on, audited,
 * or changed for the whole site by editing this file alone.
 */
export function outboundUrl(rawUrl: string): string {
  // Future: per-line affiliate tag wrapping goes here.
  return rawUrl;
}

/** The canonical outbound "deal" link for a sailing. Use this everywhere. */
export function dealUrl(sailing: Sailing): string {
  return outboundUrl(sailing.bookingUrl);
}
