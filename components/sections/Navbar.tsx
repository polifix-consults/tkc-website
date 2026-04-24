"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" }, // Or should it be #events? The images say Events, About, Events Highlights
  { href: "/about", label: "About" },
  { href: "/highlights", label: "Events Highlights" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-tkc",
        scrolled
          ? "bg-tkc-black/90 backdrop-blur-md border-b border-tkc-border/40 shadow-card"
          : "bg-transparent py-4"
      )}
    >
      <nav className="tkc-container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/images/tkclogo.png" 
            alt="The Knights Collective" 
            width={400} 
            height={60} 
            className="h-[60px] w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname === '/#events');
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-body text-body-sm text-tkc-muted hover:text-tkc-white transition-colors duration-200",
                    isActive && "text-tkc-white border-b border-tkc-gold pb-1"
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
          href="/about#your-first-move"
          className="hidden md:inline-flex items-center justify-center bg-[#E0B547] text-tkc-black font-body font-medium text-sm px-6 py-2.5 rounded hover:brightness-110 transition-all duration-300"
        >
          Join the Club
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-tkc-muted hover:text-tkc-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 ease-tkc bg-tkc-black/95 backdrop-blur-md border-b border-tkc-border",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="tkc-container py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-body-md text-tkc-muted hover:text-tkc-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-tkc-border">
            <Link
              href="/about#your-first-move"
              className="inline-flex items-center justify-center bg-[#E0B547] text-tkc-black font-body font-medium text-sm px-6 py-2.5 rounded w-full"
              onClick={() => setMenuOpen(false)}
            >
              Join the Club
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
