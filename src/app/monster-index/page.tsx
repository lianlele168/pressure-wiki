'use client';
import { useState } from 'react';
import { MONSTERS_DATA } from '@/data/wikiData';

export default function MonsterIndexPage() {
  const [filter, setFilter] = useState("All");

  const filteredMonsters = filter === "All" ? MONSTERS_DATA : MONSTERS_DATA.filter(m => m.danger === filter);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Monster & Entity Survival Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Complete survival strategies, audio cues, and counter-tactics for every entity in Roblox Pressure.</p>
      </div>

      {/* Monster Screenshot Showcase */}
      <div className="relative rounded-2xl overflow-hidden border border-cyan-900/40 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
        <img
          src="/images/pressure-angler-encounter.webp"
          alt="Roblox Pressure Bioluminescent Angler Encounter in Flooded Corridors"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
          <div className="text-xs sm:text-sm text-slate-200 font-medium">
            <span className="text-cyan-400 font-bold">Locker Perspective</span> — Angler rush evasion & sonar scream triangulation
          </div>
          <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-[11px] rounded-lg border border-cyan-500/30">
            Audio Threat: Critical
          </span>
        </div>
      </div>

      <div className="flex space-x-2">
        {["All", "Critical", "Extreme", "High", "Moderate"].map(level => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
              filter === level ? "bg-cyan-500 text-slate-950 border-cyan-400" : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredMonsters.map((m, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{m.name}</h2>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-bold ${m.badgeColor}`}>
                  {m.danger} Threat
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-cyan-400 font-semibold">🔊 Audio Cue:</span> <span className="text-slate-300">{m.audioCue}</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-semibold">📍 Spawn Location:</span> <span className="text-slate-300">{m.spawnRooms}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-emerald-400">🛡️ Counter Strategy:</div>
              <p className="text-xs text-slate-300 leading-relaxed">{m.strategy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
