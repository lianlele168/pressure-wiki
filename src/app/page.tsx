import type { Metadata } from 'next';
import AuthorCard from '@/components/AuthorCard';
import CopyCodeButton from '@/components/CopyCodeButton';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Dante Vance',
      jobTitle: 'Abyssal Blacksite Containment Specialist',
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the best survival tactics for Roblox Pressure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prioritize audio cues over visuals, always locate nearest lockers upon entering a room, tilt camera down against Eyefestation, and buy Code Breachers at Room 50.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you avoid dying to Void-mass in Pressure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inspect locker seams for purple dripping tendrils before climbing inside. Hiding in a Void-mass locker causes immediate death.',
        },
      },
    ],
  };

  return (
    <div className="space-y-10">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-slate-950 to-slate-950 border border-red-900/30 rounded-3xl p-8 sm:p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-red-700/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-red-600/8 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-700/50 text-red-300 text-xs font-semibold">
          ⚠️ Enter if you dare — Hadal Blacksite Sector 4
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Roblox Pressure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Wiki & Hub</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Comprehensive survival manual for Roblox Pressure — Entity Threat Index, Redeem Codes, Room-by-Room Navigation & Pandemonium Balance Tactics.
        </p>

        {/* E-E-A-T Author Card */}
        <div className="max-w-3xl mx-auto">
          <AuthorCard
            authorName="Dante Vance"
            role="Abyssal Blacksite Containment Specialist"
            experience="250+ Expeditions & Room 100 Verified"
            patchVersion="Update v1.8 Verified"
            editorialNote="All entity rush timings, locker audio frequency thresholds, and Void-mass detection checks are recorded live inside Hadal Blacksite runs."
          />
        </div>

        {/* Visual Gameplay Screenshot */}
        <div className="relative rounded-2xl overflow-hidden border border-red-900/40 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
          <img
            src="/images/pressure-hadal-zone.webp"
            alt="Roblox Pressure Hadal Blacksite Level 4 Submarine Facility Gameplay"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
            <div className="text-xs sm:text-sm text-slate-200 font-medium">
              <span className="text-red-400 font-bold">Hadal Blacksite</span> — Deep-sea corridor patrol & locker checkpoint inspection
            </div>
            <span className="px-2.5 py-1 bg-red-500/20 text-red-300 text-[11px] rounded-lg border border-red-500/30">
              Sector 4 Live
            </span>
          </div>
        </div>

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
          <a href="/calculator" className="bg-cyan-950/70 hover:bg-cyan-900/70 text-cyan-300 font-bold px-7 py-3 rounded-xl transition border border-cyan-800/50">
            🧮 Survival Calculator
          </a>
        </div>
      </section>

      {/* Tool Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
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

        <a href="/beginner-guide" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">📖</div>
          <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Rooms 1-100 Walkthrough</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Full breakdown of sub-aquatic corridors, Sebastian shop at Room 50, and Searchlights endgame tactics.</p>
          <span className="text-xs text-cyan-400 font-semibold">Read manual →</span>
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
          <CopyCodeButton code="ModifiersAndMovies" />
        </div>
        <p className="text-xs text-slate-500">Rewards: Free Kroner coins & XP boost</p>
      </section>
    </div>
  );
}
