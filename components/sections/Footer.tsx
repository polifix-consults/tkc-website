import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-tkc-border/40 py-24">
      <div className="tkc-container flex flex-col items-center justify-center text-center">
        {/* Brand */}
        <div className="mb-8">
          <Image 
            src="/images/tkclogo.png" 
            alt="The Knights Collective" 
            width={400} 
            height={60} 
            className="h-[60px] w-auto object-contain" 
          />
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
          {[
            { href: "/highlights", label: "Archives" },
            { href: "/about", label: "Strategy" },
           
          ].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-body-sm text-tkc-muted hover:text-tkc-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="font-body text-xs text-tkc-muted/50 tracking-wide">
          © 2026 The Knights Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
