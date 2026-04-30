"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="bg-[#f2efe9] py-24 border-t border-[#2c2627]/10 font-sans">
      <div className="tkc-container max-w-[800px] mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] mb-4 tracking-wide animate-fade-up">
          Subscribe to our newsletter & chess insights
        </h2>
        <p className="text-[#2c2627]/70 mb-10 max-w-[600px] mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Stay updated with the latest strategies, upcoming meetups, and community highlights delivered straight to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[500px] mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full px-6 py-4 rounded-lg bg-white border border-[#2c2627]/20 text-[#2c2627] placeholder:text-[#2c2627]/40 focus:outline-none focus:border-[#b75f20] transition-colors"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#b75f20] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#2c2627] transition-colors shrink-0"
          >
            Subscribe <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
