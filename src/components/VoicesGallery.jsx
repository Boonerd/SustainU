// src/components/VoicesGallery.jsx
import { LeafIcon, TreeIcon } from "./icons/SustainIcons";

export default function VoicesGallery({ goToPage }) {
  const sections = [
    { title: "Home", desc: "Dynamic hero + Call-to-Action", page: "home" },
    { title: "The Voices", desc: "Stories, audio & video gallery", page: "voices" },
    { title: "The Data", desc: "Interactive charts & insights", page: "data" },
    { title: "Act Now", desc: "Tips, trackers & community", page: "actnow" },
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
        Website Structure Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {sections.map((item, i) => (
          <button
            key={i}
            onClick={() => goToPage(item.page)}
            className="group bg-white dark:bg-[#1a1c1a] rounded-3xl p-8 text-center border-2 border-cardborder dark:border-darkborder hover:border-deepgreen dark:hover:border-lightgreen hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {i === 0 && <LeafIcon className="w-16 h-16 mx-auto mb-4 text-deepgreen dark:text-lightgreen group-hover:animate-spin" />}
            {i === 1 && <TreeIcon className="w-16 h-16 mx-auto mb-4 text-deepgreen dark:text-lightgreen group-hover:animate-bounce" />}
            {i === 2 && <LeafIcon className="w-16 h-16 mx-auto mb-4 text-midgreen group-hover:animate-pulse" />}
            {i === 3 && <TreeIcon className="w-16 h-16 mx-auto mb-4 text-lightgreen group-hover:animate-ping" />}
            <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-3">{item.title}</h3>
            <p className="text-sm text-deepgreen/70 dark:text-lightgreen/70">{item.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}