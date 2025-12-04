// src/pages/Voices.jsx  ← FINAL, SMALLER & GORGEOUS VERSION
import { SolarIcon, TreeIcon, FootprintIcon } from "../components/icons/SustainIcons";

export default function Voices() {
  const videos = [
    {
      title: "Greta Thunberg – How to Save the Planet",
      url: "https://www.youtube.com/embed/C7dwoqJzETA",
      icon: SolarIcon,
      color: "text-deep",
    },
    {
      title: "Jamie Margolin – Youth Climate Activism",
      url: "https://www.youtube.com/embed/miij6OaMqiw",
      icon: TreeIcon,
      color: "text-mid",
    },
    {
      title: "Jane Fonda – Fire Drill Fridays",
      url: "https://www.youtube.com/embed/1YyuvEvQxqo",
      icon: FootprintIcon,
      color: "text-light",
    },
  ];

  return (
    <div className="min-h-screen bg-bg px-6 py-20">
      {/* Tighter header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4">The Voices</h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          Hear directly from the people fighting for our future.
        </p>
      </div>

      {/* Smaller, tighter, more elegant cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {videos.map((video, i) => (
          <div
            key={i}
            className="bg-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Slightly smaller video (still perfect 16:9) */}
            <div className="relative pb-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={video.url}
                title={video.title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/* Compact footer */}
            <div className="p-6 text-center">
              <video.icon className={`w-14 h-14 mx-auto mb-3 ${video.color}`} />
              <h3 className="text-lg font-bold text-deep leading-tight">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}