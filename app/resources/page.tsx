import Link from "next/link";
import Image from "next/image";
import { getPosts, urlFor } from "@/lib/sanity";
import { Swords, Crown, Shield, Trophy, Castle, Target } from "lucide-react";

// Next.js Metadata API for SEO
export const metadata = {
  title: "Resources & Articles | The Knight Club",
  description: "Explore deep dives on strategy, chess tactics, and community insights from The Knight Club.",
  openGraph: {
    title: "Resources & Articles | The Knight Club",
    description: "Explore deep dives on strategy, chess tactics, and community insights from The Knight Club.",
    url: "https://theknightclub.com/resources",
    siteName: "The Knight Club",
    type: "website",
  },
};

export const revalidate = 60; // ISR

export default async function ResourcesPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        
        {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <Swords
            size={36}
            className="absolute top-12 left-0 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <Crown
            size={32}
            className="absolute top-48 right-0 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <Shield
            size={30}
            className="absolute bottom-48 left-2 text-[#2c2627]/15 rotate-45 transition-all duration-700 hover:-rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <Trophy
            size={34}
            className="absolute bottom-16 right-2 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <Castle
            size={32}
            className="absolute top-1/2 left-4 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <Target
            size={28}
            className="absolute top-2/3 right-6 text-[#b75f20]/25 -rotate-45 transition-all duration-700 hover:rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
        </div>
        
        {/* Header */}
        <div className="mb-20 animate-fade-up text-center lg:text-left" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h1 className="font-bold text-4xl md:text-5xl text-[#2c2627] mb-4 tracking-wide">
            Resources & <span className="text-[#b75f20]">Insights</span>
          </h1>
          <div className="w-16 h-1 bg-[#b75f20] rounded-full lg:ml-0 mx-auto mb-6" />
          <p className="text-[#2c2627]/80 text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Master the board and the mind. Articles, guides, and strategic breakdowns from our community of thinkers.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post: any, i: number) => (
            <div
              key={post._id}
              className="relative group w-full h-full animate-fade-up block"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, opacity: 0 }}
            >
              <Link href={`/resources/${post.slug.current}`} className="block h-full">
                {/* THE LAYERED SHADOW (Background Card) */}
                <div className="absolute inset-0 bg-[#2c2627] rounded-2xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

                {/* MAIN CARD CONTAINER */}
                <div className="relative flex flex-col w-full h-full rounded-2xl overflow-hidden z-10 bg-white border border-black/5">
                  <div className="relative h-56 md:h-64 w-full overflow-hidden bg-gray-100">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(800).height(450).url()}
                        alt={post.title}
                        fill
                        className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <span className="text-[#b75f20] opacity-50 font-sans italic tracking-wide text-lg">The Knight Club</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <time className="text-xs font-semibold uppercase tracking-wider text-[#b75f20]" dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.authorName && (
                        <>
                          <span className="text-[#2c2627]/30">•</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#2c2627]/70">{post.authorName}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-xl text-[#2c2627] mb-3 tracking-wide group-hover:text-[#b75f20] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-[#2c2627]/80 leading-relaxed line-clamp-3 mt-auto">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="py-20 text-center animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-[#2c2627]/50 font-sans tracking-wide">New insights arriving soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
