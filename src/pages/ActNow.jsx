// src/pages/ActNow.jsx  ← 100% WORKING, NO ERRORS
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
    { title: "Plant Trees",      icon: TreeIcon,      iconColor: "text-deep",       desc: "Every tree absorbs ~22kg CO₂ per year" },
    { title: "Save Water",       icon: WaterIcon,     iconColor: "text-[#3b82f6]", desc: "Fix one leak = 1,000 liters saved monthly" },
    { title: "Reduce Waste",     icon: RecycleIcon,   iconColor: "text-deep",      desc: "Recycle 1 ton paper = 17 trees saved" },
    { title: "Go Solar",         icon: SolarIcon,     iconColor: "text-[#facc15]", desc: "One home system = 100 tons CO₂ avoided" },
    { title: "Cut Carbon",       icon: FootprintIcon, iconColor: "text-deep",      desc: "Switch to biking = 300kg CO₂ saved yearly" },
    { title: "Spread Ideas",     icon: IdeaIcon,        iconColor: "text-mid",       desc: "Inspire 10 friends = exponential impact" },
  ];

  return (
    <div className="min-h-screen bg-bg px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4">
          Act Now
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          Small daily actions create massive global change. Choose one and start today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {actions.map((action, i) => (
          <div
            key={i}
            className="group bg-surface rounded-2xl p-6 text-center border border-border hover:border-deep hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <action.icon
              className={`w-16 h-16 mx-auto mb-4 ${action.iconColor} group-hover:scale-110 transition-transform`}
            />

            <h3 className="text-xl font-bold text-deep mb-2">
              {action.title}
            </h3>

            <p className="text-sm text-text-muted mb-5 leading-snug px-2">
              {action.desc}
            </p>

            <button className="w-full py-3 bg-deep text-white font-semibold rounded-full hover:bg-mid hover:scale-105 transition text-sm shadow-md">
              Start Today
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-2xl md:text-3xl font-bold text-deep">
          Every action counts. Every second matters.
        </p>
      </div>
    </div>
  );
}