import type { MetadataRoute } from "next";
import data from "@/data/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.profile.website;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/llms.txt`, changeFrequency: "monthly", priority: 0.5 },
    ...data.experienceTimeline.map((item) => ({
      url: `${base}/projects/${item.id}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
