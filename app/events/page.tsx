import { eventsService } from "@/services/events.service";
import { Metadata } from "next";
import { EventGalleryCarousel } from "@/components/events/EventGalleryCarousel";
import { EventTabs } from "@/components/events/EventTabs";

export const metadata: Metadata = {
  title: "Events & Meetups | The Knight Club",
  description: "Discover upcoming chess events, tournaments, and masterclasses at The Knight Club.",
};

export const revalidate = 3600;

export default async function EventsPage() {
  const allEvents = await eventsService.getAllEvents();

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 font-sans overflow-hidden">
      <div className="tkc-container max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Past Event Gallery Section */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-[#2c2627] mb-4 tracking-wide">
              Event Gallery
            </h2>
            <p className="text-sm font-bold tracking-widest text-[#2c2627]/50 uppercase mb-6">Moments from Past Gatherings</p>
            <div className="h-1 w-16 bg-[#b75f20] mx-auto rounded-full" />
          </div>

          <div className="-mx-4 md:-mx-8">
            <EventGalleryCarousel images={[
                "/images/eventhh.jpeg",
                "/images/Professionals.jpeg",
                "/images/MonthlyInsight.jpeg",
                "/images/strategic.jpeg",
                "/images/relaxedex.jpeg",
                "/images/bIhero.jpeg",
              ]} 
            />
          </div>
        </section>

        <div className="max-w-[1000px] mx-auto">
          <EventTabs initialEvents={allEvents} />
        </div>
      </div>
    </main>
  );
}
