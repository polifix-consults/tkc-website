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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans",
        scrolled
          ? "bg-[#2c2627]/95 backdrop-blur-md border-b border-[#31412d]/50 shadow-sm"
          : "bg-transparent py-4",
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-20 md:h-24">
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
            const isActive =
              pathname === link.href ||
              (link.href === "/" && pathname === "/#events");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-[#f2efe9]/70 hover:text-[#f2efe9] transition-colors duration-200",
                    isActive && "text-[#f2efe9] border-b border-[#c49671] pb-1",
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
          href="/join"
          className="hidden md:inline-flex items-center justify-center bg-[#c49671] text-[#2c2627] font-semibold text-sm px-6 py-2.5 rounded hover:bg-[#f2efe9] transition-all duration-300"
        >
          Join the Circle
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#f2efe9]/70 hover:text-[#f2efe9] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 bg-[#2c2627]/95 backdrop-blur-md border-b border-[#31412d]/50",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="px-4 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-[#f2efe9]/70 hover:text-[#f2efe9] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-[#31412d]/50">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-[#c49671] text-[#2c2627] font-semibold text-sm px-6 py-2.5 rounded w-full"
              onClick={() => setMenuOpen(false)}
            >
              Join the Circle
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
