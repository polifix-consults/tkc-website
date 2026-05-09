import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getPosts, urlFor } from "@/lib/sanity";

export const revalidate = 0;

// Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;

  return {
    title: `${post.title} | The Knight Club`,
    description: post.excerpt,
    alternates: {
      canonical: `https://theknightclub.com/resources/${post.slug.current}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

// Generate static routes at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

// Custom serializers for Portable Text matching TKC typography in light mode
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative group w-full my-12 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-black/5 z-10">
            <Image
              src={urlFor(value).width(1000).height(562).url()}
              alt={value.alt || "Article Image"}
              fill
              className="object-cover"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="font-bold text-4xl text-[#2c2627] mt-12 mb-6 tracking-wide">{children}</h1>,
    h2: ({ children }: any) => <h2 className="font-bold text-3xl text-[#b75f20] mt-10 mb-5 tracking-wide">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-bold text-2xl text-[#2c2627] mt-8 mb-4 tracking-wide">{children}</h3>,
    normal: ({ children }: any) => <p className="text-base md:text-lg text-[#2c2627]/80 mb-6 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#b75f20] pl-6 py-2 my-8 text-xl font-bold italic text-[#2c2627] bg-gradient-to-r from-[#b75f20]/10 to-transparent">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-[#2c2627]">{children}</strong>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#b75f20] hover:text-[#c49671] underline decoration-[#b75f20]/30 hover:decoration-[#b75f20] transition-colors font-medium"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside text-base md:text-lg text-[#2c2627]/80 mb-6 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside text-base md:text-lg text-[#2c2627]/80 mb-6 space-y-2">{children}</ol>,
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org JSON-LD for rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [
      {
        "@type": "Person",
        name: post.authorName || "The Knight Club",
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans">
      <article className="px-4 md:px-8 max-w-[800px] mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <Link
            href="/resources"
            className="inline-flex items-center text-[#b75f20] hover:text-[#c49671] transition-colors mb-10 text-xs font-semibold tracking-widest uppercase group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Resources
          </Link>
        </div>

        <header className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <time className="text-xs font-semibold tracking-wider text-[#b75f20] uppercase" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.authorName && (
              <>
                <span className="text-[#2c2627]/30">•</span>
                <span className="text-xs font-semibold tracking-wider text-[#2c2627]/70 uppercase">By {post.authorName}</span>
              </>
            )}
          </div>

          <h1 className="font-bold text-4xl md:text-5xl text-[#2c2627] leading-[1.1] tracking-wide mb-6">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-lg md:text-xl text-[#2c2627]/70 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.mainImage && (
          <div className="relative group w-full mb-16 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            {/* Image Container */}
            <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-2xl overflow-hidden bg-white border border-black/5 z-10">
              <Image
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>
        )}

        <div className="prose prose-[#2c2627] max-w-none animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-[#2c2627]/50 italic">Full article content is missing or unavailable.</p>
          )}
        </div>
      </article>
    </div>
  );
}
