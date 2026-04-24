import { HorizontalEventCard } from "@/components/ui/HorizontalEventCard";
import type { Event } from "@/lib/database.types";

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  // If no upcoming events, mock some for demo based on screenshots
  const displayEvents = events.length > 0 ? events : [
    {
      id: "mock1",
      title: "Monthly Meetups",
      location: "Room CE-1 Regina Public Library",
      start_time: new Date().toISOString(),
      cover_image_url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"
    } as Event,
    {
      id: "mock2",
      title: "Kids & Teenagers Masterclass",
      location: "Room CE-1 Regina Public Library",
      start_time: new Date().toISOString(),
      cover_image_url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1500"
    } as Event
  ];

  return (
    <section id="events" className="bg-tkc-black py-24 border-b border-tkc-border/40">
      <div className="tkc-container max-w-[1000px]">
        {/* Header */}
        <div className="mb-14">
          <h2 className="font-display font-normal text-3xl md:text-4xl text-tkc-white mb-4">
            Upcoming Events & Meetups
          </h2>
          <div className="h-[2px] w-16 bg-[#E0B547]" />
        </div>

        <div className="flex flex-col gap-6">
          {displayEvents.map((event, index) => (
            <HorizontalEventCard 
              key={event.id} 
              event={event} 
              badgeText={index === 0 ? "LAST SATURDAY'S OF THE MONTH" : "SATURDAY'S"} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
