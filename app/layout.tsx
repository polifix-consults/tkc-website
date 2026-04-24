import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Knight Club — Where Strategy Meets Culture",
    template: "%s | The Knight Club",
  },
  description:
    "The Knight Club is an exclusive chess society for thinkers, strategists, and culture makers. Events, archives, and the art of the game.",
  keywords: ["chess club", "knight club", "chess events", "chess culture", "strategy"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Knight Club",
    title: "The Knight Club — Where Strategy Meets Culture",
    description:
      "An exclusive chess society for thinkers, strategists, and culture makers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Knight Club",
    description: "Where Strategy Meets Culture",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-tkc-black text-tkc-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
