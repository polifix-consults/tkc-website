"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, Mail, ChevronLeft, ChevronRight, Trophy, ChessKnight, ChessQueen, ChessPawn, ChessBishop, ChessRook, ChessKing } from "lucide-react";
import type { Event, EventMedia } from "@/lib/database.types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface EventDetailsProps {
  event: Event;
  media?: EventMedia[];
}

export function EventDetails({ event, media = [] }: EventDetailsProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPast, setIsPast] = useState(false);

  const images = media.filter((item) => item.media_type === "image");

  useEffect(() => {
    if (event.date_is_tbc || !event.date) {
      setIsPast(false);
    } else {
      setIsPast(new Date(event.date) < new Date());
    }
  }, [event.date, event.date_is_tbc]);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Format Date
  let dateDisplay = "TBA";
  let timeDisplay = "TBA";
  
  if (event.date_is_tbc) {
    dateDisplay = "TBC";
    timeDisplay = "TBC";
  } else if (event.date) {
    const date = new Date(event.date);
    dateDisplay = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "America/Toronto" });
    timeDisplay = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "America/Toronto" });
  }

  // Parse JSON arrays safely
  const experienceList = Array.isArray(event.experience) ? event.experience : [];
  const whoShouldAttendList = Array.isArray(event.who_should_attend) ? event.who_should_attend : [];

  const handleApplyClick = () => {
    if (event.registration_link) {
      window.open(event.registration_link, "_blank", "noopener,noreferrer");
    }
  };

  const mailtoLink = `mailto:${event.contact_email || "contact@theknightclub.ca"}?subject=${encodeURIComponent(event.email_subject || `Inquiry about ${event.title}`)}&body=${encodeURIComponent(event.email_body_template || "Hello, I would like to attend this event.")}`;

  return (
    <article className="bg-white min-h-screen pb-24 text-[#2c2627] font-sans">
      {/* 1. Top Section */}
      <div className="relative w-full group">
        {/* Deck Shadow Card (Signature underlay) */}
        <div className="absolute inset-0 bg-[#2c2627] rounded-b-[2rem] md:rounded-b-[3rem] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 shadow-2xl z-0" />
        
        {/* Main Card */}
        <section className="relative w-full h-[80vh] md:h-[85vh] min-h-[500px] bg-white rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden z-10 border-b border-[#2c2627]/10 shadow-lg">
          {/* Background Image / Slider */}
          {images.length >= 2 ? (
            <>
              {images.map((img, i) => (
                <div
                  key={img.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                    i === activeSlideIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                  )}
                >
                  <Image
                    src={img.media_url}
                    alt={`${event.title} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all shadow-md opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all shadow-md opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          ) : images.length === 1 ? (
            <div className="absolute inset-0">
              <Image
                src={images[0].media_url}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="absolute inset-0">
              <Image
                src={event.cover_image_url || "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1600"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Top Vignette for Navbar Legibility */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />

          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10 pointer-events-none transition-opacity duration-500 ease-in-out",
            isPast && "group-hover:opacity-0"
          )} />
          
          <div className={cn(
            "absolute inset-0 flex items-end pb-16 z-20 transition-opacity duration-500 ease-in-out",
            isPast && "group-hover:opacity-0 pointer-events-none"
          )}>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 min-w-0">
              <div className="max-w-2xl text-left min-w-0">
                {event.is_featured && (
                  <span className="inline-block bg-[#b75f20] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-5 shadow-md shrink-0">
                    Featured Event
                  </span>
                )}
                <h1 className="font-bold tracking-wide text-3xl md:text-5xl text-white mb-5 line-clamp-2" title={event.title}>
                  {event.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white/90 mb-6 w-full min-w-0">
                  <div className="flex items-center gap-2 min-w-0 shrink-0">
                    <Calendar size={16} className="text-[#b75f20] shrink-0" />
                    <span className="text-xs font-medium truncate">{dateDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0 shrink-0">
                    <Clock size={16} className="text-[#b75f20] shrink-0" />
                    <span className="text-xs font-medium truncate">{timeDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0 flex-1 sm:max-w-[45%]">
                    <MapPin size={16} className="text-[#b75f20] shrink-0" />
                    <span className="text-xs font-medium truncate" title={event.location || "TBA"}>{event.location || "TBA"}</span>
                  </div>
                </div>

                {event.short_description && (
                  <p className="text-base text-white/80 mb-6 leading-relaxed font-medium max-w-xl line-clamp-3">
                    {event.short_description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-5">
                  {!isPast && (
                    <button onClick={handleApplyClick} className="bg-[#b75f20] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-[#2c2627] transition-all flex items-center gap-2 shadow-lg">
                      Apply to Attend <ArrowRight size={16} />
                    </button>
                  )}

                  {images.length >= 2 && (
                    <div className="flex gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/15">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveSlideIndex(i)}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all duration-300",
                            i === activeSlideIndex ? "bg-[#b75f20] w-3" : "bg-white/60 hover:bg-white"
                          )}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative tkc-container max-w-[1200px] mx-auto px-4 md:px-8 mt-16 overflow-visible">
        {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <ChessKnight
            size={36}
            className="absolute top-12 -left-12 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessQueen
            size={32}
            className="absolute top-[400px] -right-12 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessPawn
            size={30}
            className="absolute bottom-48 -left-12 text-[#2c2627]/15 rotate-45 transition-all duration-700 hover:-rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessBishop
            size={34}
            className="absolute bottom-16 -right-12 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessRook
            size={32}
            className="absolute top-[250px] -left-16 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessKing
            size={28}
            className="absolute top-[600px] -right-16 text-[#b75f20]/25 -rotate-45 transition-all duration-700 hover:rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
          {event.description && (
             <section>
                <h2 className="font-bold text-2xl text-[#2c2627] mb-6 border-b border-[#2c2627]/10 pb-4">About The Event</h2>
                <div className="text-[#2c2627]/80 leading-relaxed whitespace-pre-wrap font-medium">
                  {event.description}
                </div>
             </section>
          )}

          {/* 2. Experience Section */}
          {experienceList.length > 0 && (
            <section>
              <h2 className="font-bold text-2xl text-[#2c2627] mb-6 border-b border-[#2c2627]/10 pb-4">What to Expect</h2>
              <ul className="space-y-5 text-[#2c2627]/80 font-medium">
                {experienceList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-[#f2efe9] p-4 rounded-lg border border-[#2c2627]/5">
                    <span className="text-[#b75f20] font-bold mt-0.5">•</span>
                    <span>{String(item)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 3. Who Should Attend Section */}
          {whoShouldAttendList.length > 0 && (
            <section>
              <h2 className="font-bold text-2xl text-[#2c2627] mb-6 border-b border-[#2c2627]/10 pb-4">Who Should Attend</h2>
              <ul className="space-y-5 text-[#2c2627]/80 font-medium">
                {whoShouldAttendList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-[#f2efe9] p-4 rounded-lg border border-[#2c2627]/5">
                    <span className="text-[#b75f20] font-bold mt-0.5">•</span>
                    <span>{String(item)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8 lg:sticky lg:top-32 lg:h-fit">
          {/* 4. Location Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#b75f20] rounded-2xl translate-x-2 translate-y-2 z-0" />
            <div className="relative bg-[#f2efe9] border border-[#2c2627]/10 p-8 rounded-2xl z-10">
              <h3 className="font-bold text-xl text-[#2c2627] mb-6 border-b border-[#2c2627]/10 pb-4">Location</h3>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-[#b75f20] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2c2627]">{event.location || "Location to be announced"}</p>
                  {event.venue_note && (
                    <p className="text-sm text-[#2c2627]/70 mt-2 italic font-medium">Note: {event.venue_note}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Registration Section */}
          {!isPast && (
            <div className="bg-white border border-[#2c2627]/10 p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold text-xl text-[#2c2627] mb-4 border-b border-[#2c2627]/10 pb-4">Registration</h3>
              <p className="text-sm text-[#2c2627]/70 mb-8 font-medium">
                Spaces are limited. Secure your spot today.
              </p>
              
              <div className="flex flex-col gap-4">
                <button onClick={handleApplyClick} className="w-full bg-[#b75f20] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-[#2c2627] transition-all shadow-md">
                  Register Now
                </button>
                
                <a 
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2c2627] border border-[#2c2627]/20 py-4 px-7 rounded-lg hover:border-[#b75f20] hover:text-[#b75f20] transition-all"
                >
                  <Mail size={16} /> Contact Support
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </article>
  );
}
