'use client';
import { useState } from 'react';
import { MONSTERS_DATA } from '@/data/wikiData';

export default function MonsterIndexClient() {
  const [filter, setFilter] = useState("All");

  const filteredMonsters = filter === "All" ? MONSTERS_DATA : MONSTERS_DATA.filter(m => m.danger === filter);

  return (
    <div className="space-y-8">
      <div className="flex space-x-2 flex-wrap gap-y-2">
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
