import { BarChart3 } from "lucide-react";
import { SolarIcon, WindIcon } from "../components/icons/SustainIcons";

export default function Data() {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg px-6 py-24">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
        The Data
      </h1>

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-darkcard p-10 rounded-3xl border border-cardborder dark:border-darkborder">
            <SolarIcon className="w-20 h-20 text-deepgreen mb-6" />
            <h3 className="text-3xl font-bold text-deepgreen dark:text-lightgreen">Solar Growth</h3>
            <p className="text-6xl font-bold text-midgreen mt-4">+284%</p>
          </div>
          <div className="bg-white dark:bg-darkcard p-10 rounded-3xl border border-cardborder dark:border-darkborder">
            <WindIcon className="w-20 h-20 text-deepgreen mb-6" />
            <h3 className="text-3xl font-bold text-deepgreen dark:text-lightgreen">Wind Energy</h3>
            <p className="text-6xl font-bold text-midgreen mt-4">+167%</p>
          </div>
        </div>

        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-deepgreen/50" />
        </div>
      </div>
    </div>
  );
}