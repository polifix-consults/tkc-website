import { HeroSection } from "@/components/sections/HeroSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { AtelierSection } from "@/components/sections/AtelierSection";
import { LastMeetupHighlights } from "@/components/sections/LastMeetupHighlights";
import { getLastMeetup } from "@/lib/queries";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const lastMeetup = await getLastMeetup();

  return (
    <>
      <HeroSection />
      <PurposeSection />
      <LastMeetupHighlights event={lastMeetup} />
      <AtelierSection />
    </>
  );
}
