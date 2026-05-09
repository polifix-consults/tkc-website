import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/"], // Assuming a potential embedded studio
    },
    sitemap: "https://theknightclub.com/sitemap.xml",
  };
}
