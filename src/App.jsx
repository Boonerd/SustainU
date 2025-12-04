// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Voices from "./pages/Voices";
import Data from "./pages/Data";
import ActNow from "./pages/ActNow";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll to top when page changes
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* THIS IS YOUR MISSING NAVBAR */}
      <Navbar currentPage={currentPage} goToPage={goToPage} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="min-h-screen bg-cream dark:bg-[#0e0f0e]">
        {currentPage === "home" && <Home goToPage={goToPage} />}
        {currentPage === "voices" && <Voices />}
        {currentPage === "data" && <Data />}
        {currentPage === "actnow" && <ActNow />}
      </main>
    </div>
  );
}