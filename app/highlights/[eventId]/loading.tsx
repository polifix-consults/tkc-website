export default function EventDetailLoading() {
  return (
    <div className="pt-20">
      {/* Hero skeleton */}
      <div className="relative h-[55vh] min-h-[420px] bg-tkc-surface animate-pulse" />

      {/* Meta skeleton */}
      <div className="bg-tkc-dark border-b border-tkc-border">
        <div className="tkc-container py-8 flex gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-tkc-surface-2 rounded animate-pulse" />
              <div className="space-y-1.5">
                <div className="h-2 w-10 bg-tkc-surface-2 rounded animate-pulse" />
                <div className="h-3 w-28 bg-tkc-surface-2 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery skeleton */}
      <section className="tkc-section bg-tkc-black">
        <div className="tkc-container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-tkc-surface animate-pulse"
                style={{ height: `${[280, 360, 220, 320, 260, 400, 240, 300, 280][i]}px` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
