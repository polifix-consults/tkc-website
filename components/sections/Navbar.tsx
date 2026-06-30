"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/area-of-impact", label: "Area of Impact" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isEventDetailsPage =
    pathname.startsWith("/events/") && pathname !== "/events";

  const textColorClass = isEventDetailsPage ? "text-white" : "text-[#2c2627]";
  const textMutedColorClass = isEventDetailsPage
    ? "text-white/60"
    : "text-[#2c2627]/60";
  const linkColorClass = isEventDetailsPage
    ? "text-white/80 hover:text-[#b75f20]"
    : "text-[#2c2627]/70 hover:text-[#b75f20]";
  const logoInvertClass = isEventDetailsPage ? "invert" : "";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans",
        scrolled
          ? isEventDetailsPage
            ? "bg-[#2c2627]/95 backdrop-blur-md border-b border-white/10 shadow-sm"
            : "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-transparent py-4",
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-20 md:h-24">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start justify-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/tkcblack.png"
              alt="The Knights Collective"
              width={190}
              height={48}
              className={cn("h-[46px] w-auto object-contain", logoInvertClass)}
              priority
            />
          </Link>
          <span
            className={cn(
              "text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em] mt-1 pl-1",
              textMutedColorClass,
            )}
          >
            Building Our Community, One Piece at a time
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/" && pathname === "/#events");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-[#b75f20] border-b border-[#b75f20] pb-1"
                      : linkColorClass,
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
          className="hidden md:inline-flex items-center justify-center bg-[#b75f20] text-white font-semibold text-sm px-6 py-2.5 rounded hover:bg-[#2c2627] transition-all duration-300"
        >
          Join the Community
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            textColorClass,
            "hover:text-[#b75f20]",
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 border-b",
          isEventDetailsPage
            ? "bg-[#2c2627]/95 backdrop-blur-md border-white/10 text-white"
            : "bg-white/95 backdrop-blur-md border-black/10 text-[#2c2627]",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="px-4 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors",
                  isEventDetailsPage
                    ? "text-white/80 hover:text-[#b75f20]"
                    : "text-[#2c2627]/80 hover:text-[#b75f20]",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className={cn(
              "pt-4 border-t",
              isEventDetailsPage ? "border-white/10" : "border-black/10",
            )}
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyJwStOb7J2G5y5HehqAL61EySRv_Dmp1dUR5d9UisOrdaJg/viewform"
              className="inline-flex items-center justify-center bg-[#b75f20] text-white font-semibold text-sm px-6 py-2.5 rounded w-full hover:bg-[#2c2627] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Join the Community
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
