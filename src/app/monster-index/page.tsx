'use client';
import { useState } from 'react';

const MONSTERS = [
  {
    name: "Eyefestation",
    danger: "Extreme",
    badgeColor: "bg-red-950 text-red-400 border-red-800",
    audioCue: "Deep green glow underwater, high-pitched hum",
    strategy: "Turn camera away instantly! Do NOT make eye contact with the green luminescent eyes through underwater windows.",
    spawnRooms: "Rooms 20-99 (Sub-aquatic glass corridors)"
  },
  {
    name: "Pandemonium",
    danger: "Critical",
    badgeColor: "bg-purple-950 text-purple-400 border-purple-800",
    audioCue: "Aggressive metal clanging, loud mechanical screeching",
    strategy: "Enter a locker immediately. Complete the balance minigame by keeping your cursor inside the moving safe zone.",
    spawnRooms: "Randomly after Room 30"
  },
  {
    name: "Search Party (Angler Variant)",
    danger: "High",
    badgeColor: "bg-amber-950 text-amber-400 border-amber-800",
    audioCue: "Flickering lights, low rumbles in ventilation",
    strategy: "Break line of sight behind heavy obstacles or dive into side vents before it passes through.",
    spawnRooms: "Rooms 10-100"
  },
  {
    name: "Wall Dweller",
    danger: "Moderate",
    badgeColor: "bg-blue-950 text-blue-400 border-blue-800",
    audioCue: "Faint wet footsteps behind the player",
    strategy: "Turn around periodically. Looking directly at it causes it to stop and disintegrate into edible meat.",
    spawnRooms: "Dark hallway corridors"
  }
];

export default function MonsterIndexPage() {
  const [filter, setFilter] = useState("All");

  const filteredMonsters = filter === "All" ? MONSTERS : MONSTERS.filter(m => m.danger === filter);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Monster & Entity Survival Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Complete survival strategies, audio cues, and counter-tactics for every entity in Roblox Pressure.</p>
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
