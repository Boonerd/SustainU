// src/pages/ActNow.jsx
import { 
  IdeaIcon, 
  WaterIcon, 
  EcoTreesIcon, 
  SolarIcon, 
  FootprintIcon, 
  EcoLeafIcon 
} from "../components/icons/SustainIcons";

export default function ActNow() {
  const actions = [
    { title: "Reduce Waste",      icon: IdeaIcon,       color: "text-deepgreen" },
    { title: "Save Water",        icon: WaterIcon,      color: "text-midgreen" },
    { title: "Plant Trees",       icon: EcoTreesIcon,   color: "text-deepgreen" },
    { title: "Go Solar",          icon: SolarIcon,      color: "text-lightgreen" },
    { title: "Cut Carbon",        icon: FootprintIcon,  color: "text-deepgreen" },
    { title: "Live Green",        icon: EcoLeafIcon,    color: "text-midgreen" },
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-darkbg pxInst-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-deepgreen dark:text-lightgreen mb-6">
          Act Now
        </h1>
        <p className="text-xl text-deepgreen/70 dark:text-lightgreen/70 max-w-3xl mx-auto">
          Small actions today create a livable tomorrow. Choose one and start your impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {actions.map((action, i) => (
          <div
            key={i}
            className="bg-white dark:bg-darkcard rounded-3xl p-10 text-center border border-cardborder dark:border-darkborder hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <action.icon className={`w-24 h-24 mx-auto mb-6 ${action.color}`} />
            <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-4">
              {action.title}
            </h3>
            <button className="mt-4 px-8 py-4 bg-deepgreen dark:bg-midgreen text-white font-bold rounded-full hover:scale-110 transition">
              Start Today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}