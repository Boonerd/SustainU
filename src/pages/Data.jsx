// src/pages/Data.jsx – smaller and more elegant
import { SolarIcon, WindIcon, ChartIcon } from "../components/icons/SustainIcons";

export default function Data() {
  return (
    <div className="min-h-screen bg-bg px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-black text-deep mb-4">The Data</h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          Live, transparent, and hopeful — see how the world is changing in real time.
        </p>
      </div>

      {/* Compact Stats */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-surface rounded-2xl p-8 text-center border border-border">
          <SolarIcon className="w-16 h-16 mx-auto mb-4 text-deep" />
          <p className="text-5xl font-black text-deep">+284%</p>
          <p className="text-sm text-text-muted mt-2">Solar growth since 2015</p>
        </div>
        <div className="bg-surface rounded-2xl p-8 text-center border border-border">
          <WindIcon className="w-16 h-16 mx-auto mb-4 text-deep" />
          <p className="text-5xl font-black text-deep">+167%</p>
          <p className="text-sm text-text-muted mt-2">Wind energy growth</p>
        </div>
        <div className="bg-surface rounded-2xl p-8 text-center border border-border">
          <ChartIcon className="w-16 h-16 mx-auto mb-4 text-deep" />
          <p className="text-5xl font-black text-deep">78%</p>
          <p className="text-sm text-text-muted mt-2">Renewables by 2050 (projected)</p>
        </div>
      </div>

      {/* Live Chart – slightly smaller padding */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface rounded-3xl p-6 md:p-10 border border-border shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-deep">
            Live Global Temperature Anomaly (ERA5)
          </h3>
          <div className="w-full overflow-hidden rounded-2xl border-4 border-deep/10">
            <iframe
              src="https://climatereanalyzer.org/clim/t2_daily/?dm_id=world"
              title="Live Global Temperature Anomaly"
              className="w-full h-[500px] md:h-[600px]"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-text-muted text-xs mt-4">
            Source: <a href="https://climatereanalyzer.org" target="_blank" rel="noopener" className="underline">Climate Reanalyzer</a> • Updated daily
          </p>
        </div>
      </div>
    </div>
  );
}