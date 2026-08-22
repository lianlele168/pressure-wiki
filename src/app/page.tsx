'use client';
import { useState } from 'react';

export default function HomePage() {
  const [copied, setCopied] = useState('');

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-slate-950 to-slate-950 border border-red-900/30 rounded-3xl p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-red-700/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-red-600/8 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-700/50 text-red-300 text-xs font-semibold">
          ⚠️ Enter if you dare
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Pressure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Wiki</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Survival guide for Roblox Pressure — Entity Index, Redeem Codes, Room-by-Room Tactics & Locker Minigame Tips.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="/codes" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold px-7 py-3 rounded-xl transition shadow-lg shadow-red-600/25">
            🎁 Active Codes
          </a>
          <a href="/tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3 rounded-xl transition border border-slate-700">
            📊 Threat Tier List
          </a>
          <a href="/monster-index" className="bg-red-950/70 hover:bg-red-900/70 text-red-300 font-bold px-7 py-3 rounded-xl transition border border-red-800/50">
            👾 Monster Guide
          </a>
        </div>
      </section>

      {/* Tool Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a href="/codes" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-red-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎁</div>
          <h2 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">Redeem Codes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">All working codes for free Kroner coins and revival tokens. Verified & updated regularly.</p>
          <span className="text-xs text-red-400 font-semibold">View codes →</span>
        </a>

        <a href="/tier-list" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-rose-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">📊</div>
          <h2 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">Entity Threat Tier</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Ranked from Critical to Low threat — know which entities to fear most before entering each room.</p>
          <span className="text-xs text-rose-400 font-semibold">View threat ranking →</span>
        </a>

        <a href="/monster-index" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-orange-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">👾</div>
          <h2 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Monster Survival Guide</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Audio cues, spawn locations, and counter-strategies for every entity — from Eyefestation to Wall Dweller.</p>
          <span className="text-xs text-orange-400 font-semibold">Open monster guide →</span>
        </a>
      </section>

      {/* Latest Code Preview */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">🔥 Latest Active Code</h2>
          <a href="/codes" className="text-xs text-red-400 hover:underline">See all codes →</a>
        </div>
        <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-4">
          <div>
            <span className="font-mono text-white text-lg font-bold">ModifiersAndMovies</span>
            <span className="ml-3 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">✓ Active</span>
          </div>
          <button
            onClick={() => copy('ModifiersAndMovies')}
            className="text-xs bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg transition"
          >
            {copied === 'ModifiersAndMovies' ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-xs text-slate-500">Rewards: Free Kroner coins & XP boost</p>
      </section>
    </div>
  );
}
