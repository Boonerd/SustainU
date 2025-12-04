// src/data/emissions.js
export async function getGlobalCO2() {
  const res = await fetch("https://api.ourworldindata.org/v1/indicators/351/data");
  const data = await res.json();
  return data.entities.find(e => e.entity === "World").values.slice(-5);
}