// src/pages/Data.jsx  ← 100% FINAL VERSION
import { SolarIcon, WindIcon, ChartIcon } from "../components/icons/SustainIcons";

export default function Data() {
  return (
    <div className="min-h-screen bg-bg px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black text-deep mb-6">
          The Data
        </h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
          Live, transparent, and hopeful — see how the world is changing in real time.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-20">
        <div className="bg-surface rounded-3xl p-10 text-center border border-border shadow-xl">
          <SolarIcon className="w-24 h-24 mx-auto mb-6 text-deep" />
          <p className="text-6xl font-black text-deep">+284%</p>
          <p className="text-lg text-text-muted mt-3">Solar growth since 2015</p>
        </div>
        <div className="bg-surface rounded-3xl p-10 text-center border border-border shadow-xl">
          <WindIcon className="w-24 h-24 mx-auto mb-6 text-deep" />
          <p className="text-6xl font-black text-deep">+167%</p>
          <p className="text-lg text-text-muted mt-3">Wind energy growth</p>
        </div>
        <div className="bg-surface rounded-3xl p-10 text-center border border-border shadow-xl">
          <ChartIcon className="w-24 h-24 mx-auto mb-6 text-deep" />
          <p className="text-6xl font-black text-deep">78%</p>
          <p className="text-lg text-text-muted mt-3">Renewables by 2050 (projected)</p>
        </div>
      </div>

      {/* LIVE CHART FROM CLIMATE REANALYZER — FULLY WORKING */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-3xl p-8 border border-border shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-deep">
            Live Global Temperature Anomaly (ERA5)
          </h3>
          <div className="w-full overflow-hidden rounded-2xl border-4 border-deep/20">
            <iframe
              src="https://climatereanalyzer.org/clim/t2_daily/?dm_id=world"
              title="Live Global Temperature Anomaly"
              className="w-full h-[600px] md:h-[700px]"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-text-muted mt-6 text-sm">
            Source: <a href="https://climatereanalyzer.org" target="_blank" rel="noopener" className="underline hover:text-deep">Climate Reanalyzer</a> • University of Maine • Updated daily
          </p>
        </div>
      </div>
    </div>
  );
}