import { LeafIcon, FootprintIcon } from "../components/icons/SustainIcons";

export default function Voices() {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-deepgreen dark:text-lightgreen mb-6">
          The Voices
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-deepgreen/70 dark:text-lightgreen/70">
          Real stories from activists, scientists, and everyday heroes fighting for our planet.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-darkcard rounded-3xl overflow-hidden border border-cardborder dark:border-darkborder hover:shadow-2xl transition"
          >
            <div className="bg-gradient-to-br from-deepgreen/20 to-midgreen/20 h-48 flex items-center justify-center">
              <LeafIcon className="w-20 h-20 text-deepgreen dark:text-lightgreen opacity-50" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-3">
                Climate Warrior #{i}
              </h3>
              <p className="text-deepgreen/70 dark:text-lightgreen/70">
                “We don’t need a handful of people doing zero waste perfectly. We need millions doing it imperfectly.”
              </p>
              <div className="flex gap-3 mt-6">
                <FootprintIcon className="w-10 h-10 text-midgreen" />
                <LeafIcon className="w-10 h-10 text-deepgreen" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}