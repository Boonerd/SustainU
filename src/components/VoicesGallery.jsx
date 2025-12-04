import { EcoLeafIcon, FootprintIcon } from "./icons/SustainIcons";

export default function VoicesGallery({ goToPage }) {
  return (
    <section className="px-6 py-20">
      <h2 className="text-5xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
        Website Structure Overview
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          { title: "Home", desc: "Dynamic hero + Call-to-Action", icon: "globe" },
          { title: "The Voices", desc: "Stories, audio & video gallery", icon: "users" },
          { title: "The Data", desc: "Interactive charts & insights", icon: "chart" },
          { title: "Act Now", desc: "Tips, trackers & community", icon: "heart" }
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => goToPage(i === 0 ? "home" : i === 1 ? "voices" : i === 2 ? "data" : "actnow")}
            className="bg-white dark:bg-darkcard rounded-3xl p-8 text-center border border-cardborder dark:border-darkborder hover:shadow-2xl hover:scale-105 transition"
          >
            <EcoLeafIcon className="w-16 h-16 mx-auto mb-4 text-deepgreen dark:text-midgreen" />
            <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-3">{item.title}</h3>
            <p className="text-sm text-deepgreen/70 dark:text-lightgreen/70">{item.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}