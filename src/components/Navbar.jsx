// src/components/Navbar.jsx
import { LeafIcon } from "./icons/SustainIcons";

export default function Navbar({ currentPage, setPage }) {
  const links = [
    { name: "Home", id: "home" },
    { name: "The Voices", id: "voices" },
    { name: "The Data", id: "data" },
    { name: "Act Now", id: "actnow" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 dark:bg-darkbg/95 backdrop-blur-md border-b border-cardborder dark:border-darkborder">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LeafIcon className="w-10 h-10 text-deepgreen dark:text-lightgreen" />
          <span className="text-2xl font-bold text-deepgreen dark:text-lightgreen">SustainU</span>
        </div>

        <div className="hidden md:flex gap-10">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-lg font-medium transition ${
                currentPage === link.id
                  ? "text-deepgreen dark:text-lightgreen"
                  : "text-deepgreen/60 dark:text-lightgreen/60 hover:text-deepgreen dark:hover:text-lightgreen"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}