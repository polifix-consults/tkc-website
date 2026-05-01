"use client";

import { ArrowRight, Loader2, Check } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("EMAIL", email);
      formData.append("b_06f29fe6da2d04b0004ad9875_f8dfa83bda", "");

      const response = await fetch(
        "https://gmail.us10.list-manage.com/subscribe/post?u=06f29fe6da2d04b0004ad9875&id=f8dfa83bda",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Mailchimp doesn't return CORS headers
        }
      );

      // Since Mailchimp returns no-cors, we assume success if no error
      setIsSuccess(true);
      setEmail("");
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      // You might want to show an error state here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#f2efe9] py-24 border-t border-[#2c2627]/10 font-sans">
      <div className="tkc-container max-w-[800px] mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-[#2c2627] mb-4 tracking-wide animate-fade-up">
          Subscribe to our newsletter & chess insights
        </h2>
        <p className="text-[#2c2627]/70 mb-10 max-w-[600px] mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Stay updated with the latest strategies, upcoming meetups, and community highlights delivered straight to your inbox.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[500px] mx-auto animate-fade-up" 
          style={{ animationDelay: "0.2s" }}
        >
          <input 
            type="email" 
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="w-full px-6 py-4 rounded-lg bg-white border border-[#2c2627]/20 text-[#2c2627] placeholder:text-[#2c2627]/40 focus:outline-none focus:border-[#b75f20] transition-colors"
            required
            disabled={isLoading || isSuccess}
          />
          <button 
            type="submit" 
            disabled={isLoading || isSuccess || !email.trim()}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#b75f20] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#2c2627] transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Subscribing...
              </>
            ) : isSuccess ? (
              <>
                <Check size={18} />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
