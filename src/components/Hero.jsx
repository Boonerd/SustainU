// src/components/Hero.jsx
import { ArrowRight } from "lucide-react";
import { LeafIcon } from "./icons/SustainIcons";

export default function Hero({ goToPage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Big background leaf */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LeafIcon className="w-full h-full text-deepgreen dark:text-lightgreen" />
      </div>

      <div className="relative text-center max-w-5xl z-10">
        <h1 className="text-7xl md:text-9xl font-black text-deepgreen dark:text-lightgreen mb-6 tracking-tight">
          Sustain<span className="text-midgreen">U</span>
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-deepgreen/90 dark:text-lightgreen/90 mb-6">
          Building a Greener Future, Together
        </p>
        <p className="text-xl md:text-2xl text-deepgreen/70 dark:text-lightgreen/70 mb-12 max-w-3xl mx-auto">
          Join thousands of changemakers taking real action on climate change through sustainable practices, data-driven insights, and community-powered impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => goToPage("actnow")}
            className="group px-12 py-6 bg-deepgreen dark:bg-midgreen text-white text-xl font-bold rounded-full hover:scale-110 transition-all shadow-2xl flex items-center gap-4"
          >
            Start Your Journey
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition" />
          </button>
          <button
            onClick={() => goToPage("voices")}
            className="px-12 py-6 border-4 border-deepgreen dark:border-lightgreen text-deepgreen dark:text-lightgreen text-xl font-bold rounded-full hover:bg-deepgreen/10 dark:hover:bg-midgreen/20 transition"
          >
            Explore Stories
          </button>
        </div>
      </div>
    </section>
  );
}