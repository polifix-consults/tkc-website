import { notFound } from "next/navigation";
import { eventsService } from "@/services/events.service";
import { EventDetails } from "@/components/events/EventDetails";
import { Metadata } from "next";

export const revalidate = 3600;

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await eventsService.getEventBySlug(slug);
  
  if (!event) {
    return {
      title: "Event Not Found | The Knight Club"
    };
  }

  return {
    title: `${event.title} | The Knight Club`,
    description: event.short_description || `Join us for ${event.title} at The Knight Club.`,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await eventsService.getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const media = await eventsService.getEventMedia(event.id);

  return <EventDetails event={event} media={media} />;
}
