import { EventTabs } from "./EventTabs";
import { eventsService } from "@/services/events.service";

export async function EventSection() {
  const allEvents = await eventsService.getAllEvents();

  return (
    <section id="events" className="bg-white py-24 border-b border-black/10 font-sans">
      <div className="tkc-container max-w-[1000px] mx-auto px-4 md:px-8">
        <EventTabs initialEvents={allEvents} />
      </div>
    </section>
  );
}
