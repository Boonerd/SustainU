// src/pages/ActNow.jsx  ← REPLACE EVERYTHING
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
      iconColor: "text-deep",           // Deep green
      desc: "Every tree absorbs ~22kg CO₂ per year",
    },
    {
      title: "Save Water",
      icon: WaterIcon,
      iconColor: "text-[#3b82f6]",      // Beautiful blue (you asked!)
      desc: "Fix one leak = 1,000 liters saved monthly",
    },
    {
      title: "Reduce Waste",
      icon: RecycleIcon,
      iconColor: "text-deep",           // Deep green
      desc: "Recycle 1 ton paper = 17 trees saved",
    },
    {
      title: "Go Solar",
      icon: SolarIcon,
      iconColor: "text-[#facc15]",      // Golden yellow for sun
      desc: "One home solar system = 100 tons CO₂ avoided",
    },
    {
      title: "Cut Carbon",
      icon: FootprintIcon,
      iconColor: "text-deep",
      desc: "Switch to biking = 300kg CO₂ saved yearly",
    },
    {
      title: "Spread Ideas",
      icon: IdeaIcon,
      iconColor: "text-mid",
      desc: "Inspire 10 friends = exponential impact",
    },
  ];

  return (
    <div className="min-h-screen bg-bg px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black text-deep mb-6">
          Act Now
        </h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto">
          Small daily actions create massive global change. Choose one and start today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {actions.map((action, i) => (
          <div
            key={i}
            className="group bg-surface rounded-3xl p-10 text-center border-2 border-border hover:border-deep hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <action.icon
              className={`w-28 h-28 mx-auto mb-8 ${action.iconColor} group-hover:animate-bounce`}
            />
            <h3 className="text-2xl font-bold text-deep mb-3">
              {action.title}
            </h3>
            <p className="text-text-muted text-sm mb-8 leading-relaxed">
              {action.desc}
            </p>
            <button className="w-full py-4 bg-deep text-white font-bold rounded-full hover:bg-mid hover:scale-105 transition shadow-lg">
              Start Today
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-24">
        <p className="text-4xl font-bold text-deep">
          Every action counts. Every second matters.
        </p>
      </div>
    </div>
  );
}