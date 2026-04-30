"use client";

import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import type { Event } from "@/lib/database.types";
import { Button } from "@/components/ui/Button";

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  // Format Date
  let dateDisplay = "TBA";
  let timeDisplay = "TBA";
  
  if (event.event_date) {
    const date = new Date(event.event_date);
    dateDisplay = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    timeDisplay = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
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
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] bg-white">
        <Image
          src={event.cover_image_url || "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1600"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="tkc-container max-w-4xl mx-auto px-4 md:px-8">
            {event.is_featured && (
              <span className="inline-block bg-[#b75f20] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 shadow-md">
                Featured Event
              </span>
            )}
            <h1 className="font-bold tracking-wide text-4xl md:text-6xl text-[#2c2627] mb-6">
              {event.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[#2c2627]/80 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#b75f20]" />
                <span className="text-sm font-medium">{dateDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#b75f20]" />
                <span className="text-sm font-medium">{timeDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#b75f20]" />
                <span className="text-sm font-medium">{event.location || "TBA"}</span>
              </div>
            </div>

            {event.short_description && (
              <p className="text-lg text-[#2c2627]/70 max-w-2xl mb-8 leading-relaxed font-medium">
                {event.short_description}
              </p>
            )}

            <button onClick={handleApplyClick} className="bg-[#b75f20] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-[#2c2627] transition-all flex items-center gap-2 shadow-lg">
              Apply to Attend <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="tkc-container max-w-[1200px] mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
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
        </div>
      </div>
    </article>
  );
}
