import { SolarIcon, WindIcon, ChartIcon } from "../components/icons/SustainIcons";

export default function Data() {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-deepgreen dark:text-lightgreen mb-6">
          The Data
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-deepgreen/70 dark:text-lightgreen/70">
          Live, transparent, and hopeful — see how the world is changing.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-darkcard p-10 rounded-3xl text-center border border-cardborder dark:border-darkborder">
            <SolarIcon className="w-20 h-20 mx-auto mb-6 text-deepgreen dark:text-midgreen" />
            <p className="text-6xl font-bold text-deepgreen dark:text-lightgreen">+284%</p>
            <p className="text-deepgreen/80 dark:text-lightgreen/80 mt-2">Solar growth since 2015</p>
          </div>
          <div className="bg-white dark:bg-darkcard p-10 rounded-3xl text-center border border-cardborder dark:border-darkborder">
            <WindIcon className="w-20 h-20 mx-auto mb-6 text-deepgreen dark:text-midgreen" />
            <p className="text-6xl font-bold text-deepgreen dark:text-lightgreen">+167%</p>
            <p className="text-deepgreen/80 dark:text-lightgreen/80 mt-2">Wind energy growth</p>
          </div>
          <div className="bg-white dark:bg-darkcard p-10 rounded-3xl text-center border border-cardborder dark:border-darkborder">
            <ChartIcon className="w-20 h-20 mx-auto mb-6 text-deepgreen dark:text-midgreen" />
            <p className="text-6xl font-bold text-deepgreen dark:text-lightgreen">78%</p>
            <p className="text-deepgreen/80 dark:text-lightgreen/80 mt-2">Renewables by 2050 (projected)</p>
          </div>
        </div>

        <div className="bg-white dark:bg-darkcard rounded-3xl p-12 border border-cardborder dark:border-darkborder">
          <h3 className="text-3xl font-bold text-center mb-8 text-deepgreen dark:text-lightgreen">
            Live Global Temperature Anomaly
          </h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <p className="text-2xl text-deepgreen/50">Interactive Chart Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}