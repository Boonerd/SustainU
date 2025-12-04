// src/pages/Voices.jsx  ← FINAL VERSION WITH PODCAST EMBED
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
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4">The Voices</h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          Hear directly from the people fighting for our future.
        </p>
      </div>

      {/* YouTube Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {videos.map((video, i) => (
          <div
            key={i}
            className="bg-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
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
            <div className="p-6 text-center">
              <video.icon className={`w-14 h-14 mx-auto mb-3 ${video.color}`} />
              <h3 className="text-lg font-bold text-deep leading-tight">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* APPLE PODCAST EMBED – PERFECTLY STYLED */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-deep text-center mb-10">
          Listen to the Movement
        </h2>

        <div className="bg-surface rounded-3xl p-8 border border-border shadow-xl">
          <div className="w-full max-w-2xl mx-auto">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/gb/podcast/outrage-optimism-the-climate-podcast/id1459416461"
              title="Outrage + Optimism – The Climate Podcast"
            ></iframe>
          </div>

          <p className="text-center text-text-muted mt-6 text-sm">
            <span className="font-semibold text-deep">Outrage + Optimism</span> — Christiana Figueres, Tom Rivett-Carnac & Paul Dickinson
          </p>
        </div>
      </div>
    </div>
  );
}