import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    // Replaced #111111 with the brand's dark secondary color #2c2627
    // Enforced font-sans for Public Sans
    <footer className="bg-[#2c2627] border-t border-[#31412d]/50 py-24 font-sans">
      <div className="tkc-container max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-center text-center">
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
                className="text-sm font-medium text-[#f2efe9]/70 hover:text-[#c49671] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs text-[#f2efe9]/40 tracking-wide">
          © 2026 The Knights Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
