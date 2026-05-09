import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-09";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getPosts() {
  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        "authorName": author->name
      }`,
      {},
      { next: { revalidate: 0 } }
    );
  } catch (error) {
    console.error("Failed to fetch posts from Sanity:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body,
        "authorName": author->name
      }`,
      { slug },
      { next: { revalidate: 0 } }
    );
  } catch (error) {
    console.error("Failed to fetch post from Sanity:", error);
    return null;
  }
}
