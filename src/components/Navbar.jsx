// src/components/Navbar.jsx
import { useState } from "react";
import { LeafIcon, SunIcon, MoonIcon } from "./icons/SustainIcons";

export default function Navbar({ currentPage, goToPage, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "The Voices", id: "voices" },
    { name: "The Data", id: "data" },
    { name: "Act Now", id: "actnow" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 dark:bg-[#0e0f0e]/95 backdrop-blur-lg border-b border-cardborder dark:border-darkborder transition-all">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => goToPage("home")}>
          <LeafIcon className="w-10 h-10 text-deepgreen dark:text-lightgreen" />
          <span className="text-3xl font-black text-deepgreen dark:text-lightgreen">SustainU</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goToPage(link.id)}
              className={`text-lg font-medium transition-all hover:scale-105 ${currentPage === link.id ? "text-deepgreen dark:text-lightgreen font-bold" : "text-deepgreen/60 dark:text-lightgreen/60"}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-white/80 dark:bg-[#1a1c1a]/80 rounded-full shadow-lg hover:scale-110 transition"
          >
            {darkMode ? <SunIcon className="w-6 h-6 text-lightgreen" /> : <MoonIcon className="w-6 h-6 text-deepgreen" />}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-deepgreen dark:bg-lightgreen"></div>
              <div className="w-6 h-0.5 bg-deepgreen dark:bg-lightgreen"></div>
              <div className="w-6 h-0.5 bg-deepgreen dark:bg-lightgreen"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream dark:bg-[#0e0f0e] px-6 py-4 flex flex-col gap-4 border-t border-cardborder dark:border-darkborder">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                goToPage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-lg font-medium text-deepgreen dark:text-lightgreen hover:text-midgreen transition`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}