import Image from "next/image";
import Link from "next/link";
import { getPosts, urlFor } from "@/lib/sanity";

export async function AtelierSection() {
  const posts: Array<any> = await getPosts();
  const previewPosts = posts.slice(0, 3);

  return (
    // Applying the dark secondary background (#2c2627) and enforcing font-sans (Public Sans)
    <section className="bg-[#2c2627] pt-24 pb-0 font-sans border-t border-[#31412d]/50">
      <div className="tkc-container max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch h-full mx-auto">
        {/* Left Content */}
        <div className="bg-[#31412d]/10 p-8 md:p-16 lg:pr-24 flex flex-col justify-center min-h-[500px]">
          <p className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#c49671] mb-12">
           RESOURCES & INSIGHTS
          </p>

          <div className="grid gap-6">
            {previewPosts.map((post) => (
              <Link
                key={post._id}
                href={`/resources/${post.slug.current}`}
                className="relative group block h-full"
              >
                <div className="absolute inset-0 bg-[#2c2627] rounded-3xl translate-x-2 translate-y-2 shadow-2xl z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                <div className="relative flex flex-col w-full h-full rounded-3xl overflow-hidden z-10 bg-[#1a1a1a] border border-white/10">
                  <div className="relative h-56 md:h-64 w-full overflow-hidden bg-gray-100">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage)
                          .width(800)
                          .height(450)
                          .url()}
                        alt={post.title}
                        fill
                        className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <span className="text-[#b75f20] opacity-50 font-sans italic tracking-wide text-lg">
                          The Knight Club
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <time
                        className="text-xs font-semibold uppercase tracking-wider text-[#b75f20]"
                        dateTime={post.publishedAt}
                      >
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </time>
                      {post.authorName && (
                        <>
                          <span className="text-[#f2efe9]/30">•</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#f2efe9]/70">
                            {post.authorName}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-bold text-2xl text-[#f2efe9] mb-3 tracking-wide group-hover:text-[#c49671] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#f2efe9]/70 leading-relaxed line-clamp-3 mt-auto">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {previewPosts.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-[#1a1a1a]/80 p-6 text-[#f2efe9]/80">
                No insights available right now. Check back soon for new
                resources.
              </div>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[400px] lg:min-h-[600px] w-full border-l border-[#31412d]/30">
          <Image
            src="/images/MonthlyInsight.jpeg"
            alt="Professionals engaging over a chess board"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl"
          />
        </div>
      </div>
    </section>
  );
}
