import { EventCard } from "./EventCard";
import { eventsService } from "@/services/events.service";

export async function EventSection() {
  const upcomingEvents = await eventsService.getUpcomingEvents(3);

  // Fallback if no events (matching design)
  const displayEvents = upcomingEvents.length > 0 ? upcomingEvents : [];

  return (
    <section id="events" className="bg-white py-24 border-b border-black/10 font-sans">
      <div className="tkc-container max-w-[1000px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-14 text-center animate-fade-up">
          <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] mb-4 tracking-wide">
            Upcoming Events & Meetups
          </h2>
          <div className="h-1 w-16 bg-[#b75f20] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-6">
          {displayEvents.length > 0 ? (
            displayEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                badgeText={index === 0 ? "FEATURED EVENT" : "UPCOMING EVENT"} 
              />
            ))
          ) : (
             <div className="text-center py-12 border border-[#2c2627]/10 rounded-2xl bg-[#f2efe9]">
               <p className="text-[#2c2627]/70 font-medium">No upcoming events at the moment. Please check back later!</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
