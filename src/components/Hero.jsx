// src/components/Hero.jsx  ← FINAL VERSION (matches Voices + Act Now perfectly)
import { ArrowRight } from "lucide-react";
import { LeafIcon } from "./icons/SustainIcons";

export default function Hero({ goToPage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-bg">
      {/* Subtle background leaf — now visible in light mode too */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LeafIcon className="w-full h-full text-deep" />
      </div>

      <div className="relative text-center max-w-4xl z-10">
        {/* Title — same size as other pages */}
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4 tracking-tight">
          Sustain<span className="text-mid">U</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-bold text-deep mb-4">
          Building a Greener Future, Together
        </p>

        {/* Description — same muted text as other pages */}
        <p className="text-base md:text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of changemakers taking real action on climate change through sustainable practices, data-driven insights, and community-powered impact.
        </p>

        {/* Buttons — exactly same style as Act Now */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => goToPage("actnow")}
            className="group px-8 py-3.5 bg-deep text-white text-lg font-semibold rounded-full hover:scale-105 transition-all shadow-md flex items-center gap-3 justify-center"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>

          <button
            onClick={() => goToPage("voices")}
            className="px-8 py-3.5 border-2 border-deep text-deep font-semibold rounded-full hover:bg-deep/10 transition text-lg"
          >
            Explore Stories
          </button>
        </div>

        {/* Sustainable UI/UX Stats — now matches your site perfectly */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50">
            <p className="text-5xl font-black text-deep mb-2">30%</p>
            <p className="text-sm text-text-muted leading-tight">
              Reduction in energy consumption through Dark Mode Design
            </p>
          </div>
          <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50">
            <p className="text-5xl font-black text-deep mb-2">20%</p>
            <p className="text-sm text-text-muted leading-tight">
              Decrease in server load due to efficient coding practices
            </p>
          </div>
          <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50">
            <p className="text-5xl font-black text-deep mb-2">15%</p>
            <p className="text-sm text-text-muted leading-tight">
              Improvement in user retention from an eco-friendly color palette
            </p>
          </div>
        </div>

        {/* Title for the stats */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold text-deep">
          Sustainable UI/UX Design Principles
        </h2>
      </div>
    </section>
  );
}