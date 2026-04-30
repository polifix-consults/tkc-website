import { EventCard } from "@/components/events/EventCard";
import { eventsService } from "@/services/events.service";
import { Metadata } from "next";
import { EventGalleryCarousel } from "@/components/events/EventGalleryCarousel";

export const metadata: Metadata = {
  title: "Events & Meetups | The Knight Club",
  description: "Discover upcoming chess events, tournaments, and masterclasses at The Knight Club.",
};

export const revalidate = 3600;

export default async function EventsPage() {
  const upcomingEvents = await eventsService.getUpcomingEvents(20);

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

        <div className="mb-16">
          <h1 className="font-bold text-3xl md:text-4xl text-[#2c2627] mb-4 tracking-wide">
            Upcoming Events
          </h1>
          <div className="h-1 w-16 bg-[#b75f20] rounded-full" />
        </div>

        <div className="flex flex-col gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                badgeText={event.is_featured ? "FEATURED EVENT" : "UPCOMING EVENT"} 
              />
            ))
          ) : (
             <div className="text-center py-16 border border-[#2c2627]/10 rounded-2xl bg-[#f2efe9]">
               <p className="font-medium text-[#2c2627]/70">No upcoming events scheduled at the moment.</p>
             </div>
          )}
        </div>
      </div>
    </main>
  );
}
