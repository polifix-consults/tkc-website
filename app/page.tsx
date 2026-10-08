import { HeroSection } from "@/components/sections/HeroSection";
import { EventSection } from "@/components/events/EventSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <EventSection />
      <NewsletterSection />
    </>
  );
}
