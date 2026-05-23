import { HeroSection } from "@/components/sections/HeroSection";
import { StrategyVideoSection } from "@/components/sections/StrategyVideoSection";
import { EventSection } from "@/components/events/EventSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <StrategyVideoSection />
      <EventSection />
      <NewsletterSection />
    </>
  );
}
