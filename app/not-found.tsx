import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-tkc-black flex items-center justify-center relative overflow-hidden chess-pattern">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[40vw] text-tkc-gold/[0.03] leading-none">
          ♟
        </span>
      </div>

      <div className="relative z-10 tkc-container text-center">
        <p className="font-body text-caption uppercase tracking-[0.3em] text-tkc-gold mb-4">
          404
        </p>
        <h1 className="font-display font-normal text-display-xl text-tkc-white mb-6">
          King Not Found
        </h1>
        <p className="font-body text-body-lg text-tkc-muted max-w-[440px] mx-auto mb-10">
          The square you're looking for has been vacated. The game continues elsewhere.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-gold text-tkc-black font-body text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:brightness-110 transition-all duration-300"
        >
          Return to the Board
        </Link>
      </div>
    </div>
  );
}
