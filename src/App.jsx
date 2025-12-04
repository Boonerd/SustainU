import { Leaf, Sun, Moon, ArrowRight, HeartHandshake, BarChart3, Users, Globe } from "lucide-react";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Floating Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
      >
        {darkMode ? <Sun className="w-6 h-6 text-lightgreen" /> : <Moon className="w-6 h-6 text-deepgreen" />}
      </button>

      <div className="min-h-screen bg-cream dark:bg-darkbg transition-colors">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-24 pb-32 text-center">
          <div className="absolute inset-0 opacity-20">
            <Leaf className="w-full h-full text-deepgreen" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-deepgreen dark:text-lightgreen mb-6">
              SustainU
            </h1>
            <p className="text-xl md:text-2xl text-deepgreen/80 dark:text-lightgreen/80 mb-8">
              Building a Greener Future, Together
            </p>
            <p className="text-lg text-deepgreen/70 dark:text-lightgreen/70 max-w-2xl mx-auto mb-10">
              Join thousands of changemakers taking real action on climate change through sustainable practices, 
              data-driven insights, and community-powered impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-deepgreen dark:bg-midgreen text-white font-semibold rounded-full hover:scale-105 transition flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-deepgreen dark:border-lightgreen text-deepgreen dark:text-lightgreen font-semibold rounded-full hover:bg-deepgreen/10 dark:hover:bg-midgreen/20 transition">
                Explore Stories
              </button>
            </div>
          </div>
        </section>

        {/* Website Structure Cards */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
            Website Structure Overview
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Home", icon: Globe, desc: "Dynamic hero + Call-to-Action" },
              { title: "The Voices", icon: Users, desc: "Stories, audio & video gallery" },
              { title: "The Data", icon: BarChart3, desc: "Interactive charts & insights" },
              { title: "Act Now", icon: HeartHandshake, desc: "Tips, trackers & community" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-darkcard border border-cardborder dark:border-darkborder rounded-2xl p-8 text-center hover:shadow-2xl transition-shadow">
                <item.icon className="w-16 h-16 mx-auto mb-4 text-deepgreen dark:text-midgreen" />
                <h3 className="text-2xl font-bold text-deepgreen dark:text-lightgreen mb-3">{item.title}</h3>
                <p className="text-deepgreen/70 dark:text-lightgreen/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainable UI Stats */}
        <section className="px-6 py-20 bg-deepgreen/5 dark:bg-midgreen/10">
          <h2 className="text-4xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
            Sustainable UI/UX Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["30% Reduction in energy (Dark Mode)", "20% Less server load (Efficient Code)", "15% Better retention (Eco-Friendly Palette)"].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-darkcard rounded-2xl p-8 text-center border border-cardborder dark:border-darkborder">
                <div className="text-6xl font-bold text-deepgreen dark:text-midgreen mb-2">
                  {stat.split(" ")[0]}
                </div>
                <p className="text-deepgreen/80 dark:text-lightgreen/80">{stat.split(" ").slice(1).join(" ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;