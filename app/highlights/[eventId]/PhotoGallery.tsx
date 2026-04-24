"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { EventMedia } from "@/lib/database.types";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  media: EventMedia[];
}

export function PhotoGallery({ media }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = media.filter((m) => m.media_type === "image");

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-body text-body-sm text-tkc-muted">No media available for this event.</p>
      </div>
    );
  }

  // Masonry-style layout using CSS columns
  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="group relative break-inside-avoid overflow-hidden bg-tkc-surface border border-tkc-border cursor-pointer"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View image ${index + 1}`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
          >
            <div className="relative w-full">
              <Image
                src={item.media_url}
                alt={`Event media ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 ease-tkc group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-tkc-black/0 group-hover:bg-tkc-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full border border-tkc-gold/60 bg-tkc-black/60 flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn size={16} className="text-tkc-gold" />
                </div>
              </div>
            </div>

            {/* Index badge */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-mono text-[9px] text-tkc-muted bg-tkc-black/70 px-2 py-1 backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-tkc-border bg-tkc-surface flex items-center justify-center text-tkc-muted hover:text-tkc-white hover:border-tkc-gold/40 transition-all duration-200"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={16} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
            <span className="font-mono text-[10px] text-tkc-muted tracking-[0.15em]">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-tkc-border bg-tkc-surface flex items-center justify-center text-tkc-muted hover:text-tkc-white hover:border-tkc-gold/40 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].media_url}
              alt={`Event media ${lightboxIndex + 1}`}
              width={1400}
              height={1000}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain border border-tkc-border"
              priority
            />
            {/* Gold frame corners */}
            <div className="absolute top-0 left-0 w-8 h-0.5 bg-tkc-gold/40" />
            <div className="absolute top-0 left-0 w-0.5 h-8 bg-tkc-gold/40" />
            <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-tkc-gold/40" />
            <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-tkc-gold/40" />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-tkc-border bg-tkc-surface flex items-center justify-center text-tkc-muted hover:text-tkc-white hover:border-tkc-gold/40 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Dot navigation */}
          {images.length > 1 && images.length <= 20 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "transition-all duration-200",
                    i === lightboxIndex
                      ? "w-4 h-1 bg-tkc-gold"
                      : "w-1 h-1 rounded-full bg-tkc-muted/50 hover:bg-tkc-muted"
                  )}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
