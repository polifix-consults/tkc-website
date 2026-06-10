import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Knights Collective — Where Strategy Meets Culture",
    template: "%s | The Knights Collective",
  },
  description:
    "The Knights Collective is a chess community for thinkers, strategists, and change makers. Events, archives, and the art of the game.",
  keywords: [
    "chess club",
    "knight club",
    "chess events",
    "chess culture",
    "strategy",
    "chess community",
    "chess players"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Knights Collective",
    title: "The Knights Collective — Where Strategy Meets Culture",
    description:
      "A Chess society for thinkers, strategists, and change makers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Knight Collective",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="facebook-domain-verification"
          content="myc9kksqks9wpgyof7q2pi5h80esin"
        />
      </head>
      <body className="bg-tkc-black text-tkc-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
