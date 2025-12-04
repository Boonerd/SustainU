// src/pages/Voices.jsx
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
    <div className="min-h-screen bg-bg px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black text-deep mb-6">The Voices</h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto">
          Hear directly from the people fighting for our future.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {videos.map((video, i) => (
          <div
            key={i}
            className="bg-surface rounded-3xl overflow-hidden border border-border shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3"
          >
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={video.url}
                title={video.title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className="p-10 text-center">
              <video.icon className={`w-20 h-20 mx-auto mb-6 ${video.color}`} />
              <h3 className="text-2xl font-bold text-deep mb-3">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}