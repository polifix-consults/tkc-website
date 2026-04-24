export default function HighlightsLoading() {
  return (
    <div className="pt-20">
      {/* Header skeleton */}
      <section className="tkc-section bg-tkc-dark">
        <div className="tkc-container text-center">
          <div className="h-3 w-24 bg-tkc-surface rounded mx-auto mb-5 animate-pulse" />
          <div className="h-10 w-64 bg-tkc-surface rounded mx-auto mb-6 animate-pulse" />
          <div className="h-4 w-96 bg-tkc-surface rounded mx-auto animate-pulse" />
        </div>
      </section>

      {/* Grid skeleton */}
      <section className="tkc-section bg-tkc-black">
        <div className="tkc-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-tkc-surface border border-tkc-border overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/3] bg-tkc-surface-2 animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-tkc-surface-2 rounded animate-pulse" />
                  <div className="h-3 w-1/2 bg-tkc-surface-2 rounded animate-pulse" />
                  <div className="h-3 w-1/3 bg-tkc-surface-2 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
