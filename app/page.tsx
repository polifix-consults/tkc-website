import { HeroSection } from "@/components/sections/HeroSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { AtelierSection } from "@/components/sections/AtelierSection";
import { EventSection } from "@/components/events/EventSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <EventSection />
      <AtelierSection />
      <NewsletterSection />
    </>
  );
}
