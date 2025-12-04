import { FootprintIcon } from "./icons/SustainIcons";

export default function WorryHopeArc() {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-red-900/20 to-green-900/20 dark:from-red-900/40 dark:to-green-900/40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-deepgreen dark:text-lightgreen mb-12">
          Managing Emotional Responses: The Worry → Hope Arc
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-darkcard rounded-3xl p-10 border border-cardborder dark:border-darkborder">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">Counteracting Climate Despair</h3>
            <p>Turning anxiety into action through honest storytelling.</p>
          </div>
          <div className="bg-white dark:bg-darkcard rounded-3xl p-10 border border-cardborder dark:border-darkborder">
            <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-4">Positive Agents of Change</h3>
            <p>Real people making a real difference — today.</p>
          </div>
          <div className="bg-white dark:bg-darkcard rounded-3xl p-10 border border-cardborder dark:border-darkborder">
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">Mobilizing Pro-Environmental Behavior</h3>
            <p>From worry to hope — one small action at a time.</p>
          </div>
        </div>
        <FootprintIcon className="w-32 h-32 mx-auto mt-12 text-deepgreen dark:text-midgreen opacity-50" />
      </div>
    </section>
  );
}