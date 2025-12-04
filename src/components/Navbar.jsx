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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => goToPage("home")}
        >
          <div className="transform group-hover:rotate-12 transition-transform duration-300">
            <LeafIcon className="w-9 h-9 text-deep" />
          </div>
          <span className="text-3xl font-bold text-deep">
            Sustain<span className="text-accent">U</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goToPage(link.id)}
              className={`text-base font-semibold transition-all duration-200 relative group
                ${currentPage === link.id 
                  ? "text-deep" 
                  : "text-text-muted hover:text-deep"
                }`}
            >
              {link.name}
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-mid transition-all duration-300
                ${currentPage === link.id ? "w-full" : "w-0 group-hover:w-full"}`} 
              />
            </button>
          ))}
        </div>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 bg-light/20 hover:bg-light/30 dark:bg-deep/20 dark:hover:bg-deep/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-deep" />
            ) : (
              <MoonIcon className="w-5 h-5 text-deep" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden p-2 hover:bg-light/20 dark:hover:bg-deep/20 rounded-lg transition-all" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-deep transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-deep transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-deep transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide Down Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border
        ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-surface px-6 py-4 space-y-1">
          {links.map((link, index) => (
            <button
              key={link.id}
              onClick={() => {
                goToPage(link.id);
                setMobileMenuOpen(false);
              }}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200
                ${currentPage === link.id 
                  ? "bg-light/30 text-deep" 
                  : "text-text-muted hover:bg-light/20 hover:text-deep"
                }
                ${mobileMenuOpen ? 'animate-slideIn' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add this to your CSS for the slide animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}