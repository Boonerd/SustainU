// src/pages/ActNow.jsx
import {
  TreeIcon,
  WaterIcon,
  RecycleIcon,
  SolarIcon,
  FootprintIcon,
  IdeaIcon,
} from "../components/icons/SustainIcons";

export default function ActNow() {
  const actions = [
    {
      title: "Plant Trees",
      icon: TreeIcon,
      color: "text-deepgreen",
      desc: "Every tree absorbs ~22kg CO₂ per year",
    },
    {
      title: "Save Water",
      icon: WaterIcon,
      color: "text-midgreen",
      desc: "Fix one leak = 1,000 liters saved monthly",
    },
    {
      title: "Reduce Waste",
      icon: RecycleIcon,
      color: "text-deepgreen",
      desc: "Recycle 1 ton paper = 17 trees saved",
    },
    {
      title: "Go Solar",
      icon: SolarIcon,
      color: "text-lightgreen",
      desc: "One home solar system = 100 tons CO₂ avoided",
    },
    {
      title: "Cut Carbon",
      icon: FootprintIcon,
      color: "text-deepgreen",
      desc: "Switch to biking = 300kg CO₂ saved yearly",
    },
    {
      title: "Spread Ideas",
      icon: IdeaIcon,
      color: "text-midgreen",
      desc: "Inspire 10 friends = exponential impact",
    },
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-[#0e0f0e] px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-deepgreen dark:text-lightgreen mb-6">
          Act Now
        </h1>
        <p className="text-xl md:text-2xl text-deepgreen/70 dark:text-lightgreen/70 max-w-4xl mx-auto">
          Small daily actions create massive global change. Choose one and start today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {actions.map((action, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-[#1a1c1a] rounded-3xl p-10 text-center border-2 border-cardborder dark:border-darkborder hover:border-deepgreen dark:hover:border-lightgreen hover:shadow-2xl transition-all duration-500"
          >
            <action.icon
              className={`w-24 h-24 mx-auto mb-6 ${action.color} group-hover:animate-bounce`}
            />
            <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-3">
              {action.title}
            </h3>
            <p className="text-deepgreen/70 dark:text-lightgreen/70 text-sm mb-6">
              {action.desc}
            </p>
            <button className="w-full py-4 bg-deepgreen dark:bg-midgreen text-white font-bold rounded-full hover:scale-105 transition shadow-lg">
              Start Today
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-3xl font-bold text-deepgreen dark:text-lightgreen">
          Every action counts. Every second matters.
        </p>
      </div>
    </div>
  );
}