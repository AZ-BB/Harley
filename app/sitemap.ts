import type { MetadataRoute } from "next";

const baseUrl = "https://www.harleypalletsltd.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
