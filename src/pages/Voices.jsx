import { EcoLeafIcon, FootprintIcon } from "../components/icons/SustainIcons";

export default function Voices() {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg px-6 py-24">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-deepgreen dark:text-lightgreen mb-8">
        The Voices
      </h1>
      <p className="text-xl text-center max-w-3xl mx-auto text-deepgreen/80 dark:text-lightgreen/80 mb-16">
        A multimedia gallery that showcases real stories, audio interviews, and videos from climate activists, scientists, and everyday changemakers.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white dark:bg-darkcard rounded-2xl overflow-hidden border border-cardborder dark:border-darkborder hover:shadow-2xl transition">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-2">
                Story Title {i}
              </h3>
              <div className="flex gap-3 mt-4">
                <FootprintIcon className="w-8 h-8 text-midgreen" />
                <EcoLeafIcon className="w-8 h-8 text-deepgreen" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}