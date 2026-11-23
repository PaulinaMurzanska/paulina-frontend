import type { MetadataRoute } from "next";
import data from "@/data/data.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${data.profile.website}/sitemap.xml`,
  };
}
