import { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URLs
  const baseUrl = "https://theknightclub.com";
  
  const routes = [
    "",
    "/about",
    "/events",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Fetch dynamic blog posts
  try {
    const posts = await getPosts();
    const postRoutes = posts.map((post: any) => ({
      url: `${baseUrl}/resources/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    
    return [...routes, ...postRoutes];
  } catch (error) {
    console.error("Failed to generate dynamic sitemap for posts", error);
    return routes;
  }
}
