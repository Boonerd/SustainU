import { useState, useEffect } from "react";
import { getGlobalCO2 } from "../data/emissions";

export default function DataVisualization() {
  const [co2, setCo2] = useState([]);

  useEffect(() => {
    getGlobalCO2().then(setCo2);
  }, []);

  return (
    <div className="bg-white dark:bg-darkcard p-8 rounded-3xl">
      <h3 className="text-3xl font-bold text-deepgreen dark:text-lightgreen">Global CO₂ (Mt)</h3>
      {co2.map(year => (
        <div key={year.year} className="text-2xl">
          {year.year}: <span className="font-bold text-midgreen">{year.value.toFixed(0)}</span>
        </div>
      ))}
    </div>
  );
}