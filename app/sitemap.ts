import type { MetadataRoute } from "next";
import { site } from "@/lib/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return site.origin ? [{ url: site.origin, changeFrequency: "monthly", priority: 1 }] : [];
}
