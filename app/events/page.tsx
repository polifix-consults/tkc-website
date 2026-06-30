import { eventsService } from "@/services/events.service";
import { Metadata } from "next";
import { EventTabs } from "@/components/events/EventTabs";
import { ChessKnight, ChessQueen, ChessPawn, ChessBishop, ChessRook, ChessKing, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Meetups | The Knight Club",
  description: "Discover upcoming chess events, tournaments, and masterclasses at The Knight Club.",
};

export const revalidate = 3600;

export default async function EventsPage() {
  const allEvents = await eventsService.getAllEvents();

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 font-sans overflow-hidden">
      <div className="tkc-container max-w-[1200px] mx-auto px-4 md:px-8 relative">
        
        {/* FLOATING THEMATIC CHESS & STRATEGY ICONS */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <ChessKnight
            size={36}
            className="absolute top-12 left-0 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessQueen
            size={32}
            className="absolute top-48 right-0 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessPawn
            size={30}
            className="absolute bottom-48 left-2 text-[#2c2627]/15 rotate-45 transition-all duration-700 hover:-rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessBishop
            size={34}
            className="absolute bottom-16 right-2 text-[#b75f20]/25 -rotate-12 transition-all duration-700 hover:rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessRook
            size={32}
            className="absolute top-1/2 left-4 text-[#2c2627]/15 rotate-12 transition-all duration-700 hover:-rotate-12 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
          <ChessKing
            size={28}
            className="absolute top-2/3 right-6 text-[#b75f20]/25 -rotate-45 transition-all duration-700 hover:rotate-45 hover:scale-110 hover:text-[#b75f20] pointer-events-auto cursor-default"
          />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10">
          <EventTabs initialEvents={allEvents} />
        </div>
      </div>
    </main>
  );
}
