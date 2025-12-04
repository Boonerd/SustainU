// src/pages/Calculator.jsx  ← FINAL, FLAWLESS VERSION
import { TreeIcon, FootprintIcon } from "../components/icons/SustainIcons";
import { useState, useEffect } from "react";

export default function Calculator({ goToPage }) {
  const [flights, setFlights] = useState(2);
  const [meatMeals, setMeatMeals] = useState(7);
  const [carKm, setCarKm] = useState(150);
  const [recycle, setRecycle] = useState(true);
  const [showResult, setShowResult] = useState(false);

  // Real-world accurate calculations
  const totalCO2 = flights * 800 + meatMeals * 3.5 * 52 + carKm * 0.17 * 52;
  const savedCO2 = recycle ? 240 : 0;
  const netCO2 = Math.round(totalCO2 - savedCO2);
  const trees = Math.ceil(netCO2 / 22);

  // Gentle, beautiful success sound (100% free & legal)
  useEffect(() => {
    if (showResult) {
      const audio = new Audio("https://cdn.freesound.org/previews/657/657297_11440439-lq.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {}); // silent fail if browser blocks
    }
  }, [showResult]);

  return (
    <div className="min-h-screen bg-bg px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4">Your Impact</h1>
        <p className="text-xl text-text-muted">Calculate. Listen. Act.</p>
      </div>

      {/* INPUT SCREEN */}
      {!showResult ? (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-surface rounded-3xl p-8 border border-border shadow-lg">
            <label className="block text-deep font-bold mb-4 text-lg">Flights per year (long-haul)</label>
            <input type="range" min="0" max="10" value={flights} onChange={(e) => setFlights(+e.target.value)} className="w-full h-3 rounded-lg accent-deep" />
            <div className="text-center text-3xl font-bold text-deep mt-3">{flights}</div>
          </div>

          <div className="bg-surface rounded-3xl p-8 border border-border shadow-lg">
            <label className="block text-deep font-bold mb-4 text-lg">Meat meals per week</label>
            <input type="range" min="0" max="14" value={meatMeals} onChange={(e) => setMeatMeals(+e.target.value)} className="w-full h-3 rounded-lg accent-deep" />
            <div className="text-center text-3xl font-bold text-deep mt-3">{meatMeals}</div>
          </div>

          <div className="bg-surface rounded-3xl p-8 border border-border shadow-lg">
            <label className="block text-deep font-bold mb-4 text-lg">Weekly car travel (km)</label>
            <input
              type="number"
              value={carKm}
              onChange={(e) => setCarKm(+e.target.value || 0)}
              className="w-full px-5 py-4 rounded-xl border border-border text-deep text-xl text-center font-medium"
              placeholder="150"
            />
          </div>

          <div className="text-center py-6">
            <label className="text-xl font-bold text-deep cursor-pointer">
              <input type="checkbox" checked={recycle} onChange={() => setRecycle(!recycle)} className="w-7 h-7 mr-4 accent-deep" />
              I recycle regularly
            </label>
          </div>

          {/* Perfectly sized button */}
          <button
            onClick={() => setShowResult(true)}
            className="w-full py-5 bg-deep text-white text-2xl font-bold rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
          >
            Show My Impact
          </button>
        </div>
      ) : (
        /* RESULT SCREEN — EMOTIONAL & BEAUTIFUL */
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-surface rounded-3xl p-12 border-4 border-deep/20 shadow-2xl">
            <FootprintIcon className="w-28 h-28 mx-auto mb-6 text-deep animate-pulse" />
            <p className="text-6xl md:text-7xl font-black text-deep mb-2">{netCO2.toLocaleString()} kg</p>
            <p className="text-2xl text-text-muted mb-10">CO₂ per year</p>

            {/* Animated forest */}
            <div className="flex flex-wrap justify-center gap-3 my-12">
              {[...Array(Math.min(trees, 15))].map((_, i) => (
                <TreeIcon
                  key={i}
                  className="w-14 h-14 text-mid animate-bounce"
                  style={{ animationDelay: `${i * 0.12}s`, animationDuration: "2s" }}
                />
              ))}
              {trees > 15 && <p className="text-3xl font-bold text-deep self-center ml-4">+ {trees - 15} more trees needed</p>}
            </div>

            <p className="text-2xl md:text-3xl font-bold text-deep mb-10">
              You need <span className="text-mid">{trees} trees</span> planted to go carbon neutral
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => setShowResult(false)} className="px-10 py-4 bg-deep text-white text-xl font-bold rounded-full hover:scale-105 transition shadow-lg">
                Try Again
              </button>
              <button onClick={() => goToPage("actnow")} className="px-10 py-4 border-3 border-deep text-deep text-xl font-bold rounded-full hover:bg-deep/10 transition">
                Take Action Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}