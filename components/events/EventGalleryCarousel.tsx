"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventGalleryCarouselProps {
  images: string[];
}

export function EventGalleryCarousel({ images }: EventGalleryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 300 : 450;
      carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const cardWidth = window.innerWidth < 768 ? 300 : 450;
      
      // If we've reached the end, loop back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      scrollRight();
    }, 3500); // Auto scroll every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#2c2627] p-3 md:p-4 rounded-full shadow-lg border border-[#2c2627]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hover:text-[#b75f20]"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={scrollRight}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#2c2627] p-3 md:p-4 rounded-full shadow-lg border border-[#2c2627]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hover:text-[#b75f20]"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Track */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-8 pb-8 pt-4 px-4 md:px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative flex-none w-[280px] sm:w-[350px] md:w-[450px] h-[350px] md:h-[450px] snap-center animate-fade-up group/card cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* 3D Offset shadow effect */}
            <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-2 translate-y-2 z-0 transition-transform duration-500 group-hover/card:translate-x-4 group-hover/card:translate-y-4 shadow-sm" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 bg-[#f2efe9] border border-[#2c2627]/10">
              <Image
                src={src}
                alt={`Event Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-[#2c2627]/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
