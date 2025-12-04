// src/components/Hero.jsx  ← REPLACE ENTIRE FILE WITH THIS
import { ArrowRight } from "lucide-react";
import { LeafIcon } from "./icons/SustainIcons";

export default function Hero({ goToPage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle background leaf */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LeafIcon className="w-full h-full text-deep" />
      </div>

      <div className="relative text-center max-w-5xl z-10">
        <h1 className="text-7xl md:text-9xl font-black text-deep mb-6 tracking-tight">
          Sustain<span className="text-mid">U</span>
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-deep mb-6">
          Building a Greener Future, Together
        </p>
        <p className="text-xl md:text-2xl text-deep/70 mb-12 max-w-3xl mx-auto">
          Join thousands of changemakers taking real action on climate change through sustainable practices, data-driven insights, and community-powered impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Primary Button */}
          <button
            onClick={() => goToPage("actnow")}
            className="group px-12 py-6 bg-deep text-white text-xl font-bold rounded-full hover:scale-110 transition-all shadow-2xl flex items-center gap-4"
          >
            Start Your Journey
            <ArrowRight className="w-7 h-7 text-white group-hover:translate-x-2 transition" />
          </button>

          {/* Secondary Button — NOW VISIBLE! */}
          <button
            onClick={() => goToPage("voices")}
            className="px-12 py-6 border-4 border-deep text-deep font-bold rounded-full hover:bg-deep/10 transition text-xl"
          >
            Explore Stories
          </button>
        </div>
      </div>
    </section>
  );
}