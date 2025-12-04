import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-cream to-white dark:from-darkbg dark:to-darkcard">
      <h1 className="text-6xl md:text-8xl font-bold text-deepgreen dark:text-lightgreen mb-6">
        SustainU
      </h1>
      <p className="text-2xl text-deepgreen/80 dark:text-lightgreen/80 mb-8 max-w-4xl mx-auto">
        Building a Greener Future, Together
      </p>
      <p className="text-lg max-w-3xl mx-auto mb-12 text-deepgreen/70 dark:text-lightgreen/70">
        Join thousands taking real action through stories, data, and community-powered impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="px-10 py-5 bg-deepgreen dark:bg-midgreen text-white text-lg font-bold rounded-full hover:scale-105 transition flex items-center gap-3">
          Start Your Journey <ArrowRight className="w-6 h-6" />
        </button>
        <button className="px-10 py-5 border-2 border-deepgreen dark:border-lightgreen text-deepgreen dark:text-lightgreen font-bold rounded-full hover:bg-deepgreen/10 dark:hover:bg-midgreen/20 transition">
          Explore Stories
        </button>
      </div>
    </section>
  );
}