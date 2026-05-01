import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#2c2627]/10 py-16 font-sans">
      <div className="tkc-container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left mb-16">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/images/tkcblack.png"
                alt="The Knights Collective"
                width={200}
                height={60}
                className="h-[50px] w-auto object-contain"
              />
            </Link>
            <p className="text-[#2c2627]/70 font-medium italic">
              "Building our community a piece at a time"
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { href: "/events", label: "Events" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#2c2627] hover:text-[#b75f20] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center justify-center md:justify-end gap-5">
            <a
              href="https://www.facebook.com/share/1Gz7GR3CcV/"
              className="w-10 h-10 rounded-full bg-[#f2efe9] flex items-center justify-center text-[#2c2627] hover:bg-[#b75f20] hover:text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-knights-collective-tkc/"
              className="w-10 h-10 rounded-full bg-[#f2efe9] flex items-center justify-center text-[#2c2627] hover:bg-[#b75f20] hover:text-white transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/tkc_sk?igsh=MXcxZ2kwaThtbzY4Mw=="
              className="w-10 h-10 rounded-full bg-[#f2efe9] flex items-center justify-center text-[#2c2627] hover:bg-[#b75f20] hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#2c2627]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#2c2627]/50">
          <p>© 2026 The Knights Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#b75f20] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#b75f20] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
