import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devoc.bvocfarookcollege.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://devoc.bvocfarookcollege.com/register",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://devoc.bvocfarookcollege.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
