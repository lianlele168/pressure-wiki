import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, Volume2, Compass, HeartPulse, HelpCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginner-guide',
  },

  title: 'Roblox Pressure Beginner Guide — Room 1 to 100 Complete Survival Manual',
  description: 'Ultimate survival manual for Roblox Pressure. Master room navigation from Door 1 to 100, audio cues for Angler variants, locker minigame strategies, and Searchlights boss guide.',
  keywords: ['roblox pressure guide', 'pressure room 1 to 100', 'pressure pandemonium strategy', 'pressure eyefestation counter', 'pressure beginner guide']
};

export default function BeginnerGuidePage() {
  const survivalRules = [
    {
      rule: 'Locker Proximity Awareness & Line of Sight',
      detail: 'Never cross into a newly unlocked chamber without locating at least one valid locker or side maintenance duct. When Angler or Blitz triggers an audio cue, you have between 1.5 and 4 seconds to conceal yourself. Inspect locker seams for purple Void-mass tendrils before entering; hiding inside a Void-mass locker results in instant death.'
    },
    {
      rule: 'Audio Cue Triangulation Over Visuals',
      detail: 'Over 80% of lethal hazards in Pressure give sound cues before visual indicators. Pinkie does not flicker lights at all, announcing her arrival solely via a high-pitched metallic shriek. Always keep in-game master volume above 70% and wear stereo headphones to distinguish incoming entity direction.'
    },
    {
      rule: 'Eyefestation Camera Inversion Technique',
      detail: 'When navigating flooded glass corridors between Rooms 20 and 90, looking at the luminescent green eyes of Eyefestation causes rapid sanity loss and lethal damage. The moment you hear the deep resonant hum, tilt your camera 90 degrees downward to view only the metal grated floor and proceed forward blindly using wall collision.'
    },
    {
      rule: 'Pandemonium Active Balance Minigame',
      detail: 'Unlike standard Anglers where hiding inside a locker is passive, Pandemonium initiates an intense balance minigame. A vibrating green targeting circle will appear on your screen. You must continually steer your mouse to keep the circular cursor stabilized in the center safe zone until the entity finishes rattling the locker door.'
    }
  ];

  const phaseBreakdowns = [
    {
      range: 'Rooms 1 - 25: The Upper Sector',
      overview: 'Low-intensity training grounds. The Angler begins spawning around Room 10. Prioritize gathering Kroner currency and checking filing cabinets for spare Flashlights, Code Breachers, and Batteries. Watch out for Wall Dwellers stalking from unlit hallways behind you.',
      tip: 'Look behind you every 15 seconds. If you see a wet humanoid creeping behind you, looking directly at it forces it to turn into edible meat that restores 25 HP.'
    },
    {
      range: 'Rooms 26 - 49: The Sub-Aquatic Corridors',
      overview: 'Entity speed and variety spike drastically. You will encounter rapid Blitz rushes, Froger bouncing mechanics, and Eyefestation glass corridors. Squiddles begin lurking in pitch-black rooms; turn off all light sources to avoid provoking tentacle strikes.',
      tip: 'Conserve your Flashlight batteries for pitch-black hazard rooms. Use cheaper Glowsticks for ambient room scanning.'
    },
    {
      range: 'Room 50: Sebastian Solace Sanctuary',
      overview: 'A safe submarine refuge operated by the merchant Sebastian Solace. Spend accumulated Kroner on Code Breachers, Medkits, and Flashbeacons. Sebastian will provide lore hints about the containment breach.',
      tip: 'Never flash your flashlight or Flashbeacon directly in Sebastian face repeatedly, or he will draw his shotgun and eliminate you.'
    },
    {
      range: 'Rooms 51 - 100: The Abyssal Trench & Searchlights',
      overview: 'Endgame gauntlet. Encounter Chainsmoker releasing toxic locker smoke, automated ceiling turrets sweeping red targeting lasers, and massive multi-room flooded caverns where the colossal Searchlights entity stalks with spotlight beams.',
      tip: 'During the Searchlights cavern, stay submerged beneath sunken cargo containers. Swim between cover points only when the yellow spotlight sweeps away.'
    }
  ];

  const faqs = [
    {
      q: 'How do you tell which door is real when Good People spawns?',
      a: 'Good People creates a fake door that bites players who open it. To detect it, examine the room number plaque above the door. If the number skips the proper sequence, or if you stand close and hear wet raspy breathing, it is a fake door.'
    },
    {
      q: 'How do you beat the Pandemonium locker minigame?',
      a: 'Keep your mouse sensitivity moderate (not too high). Gently drag your cursor to follow the oscillating green circle. Do not make erratic jerking movements; smooth tracking ensures the balance bar never dips into the red penalty zone.'
    },
    {
      q: 'What should I buy from Sebastian Solace at Room 50?',
      a: 'Prioritize buying Code Breachers and Medkits. Code Breachers allow you to bypass high-security doors and shutdown automated turrets in Rooms 70-95 without solving tedious puzzle generators under monster pressure.'
    },
    {
      q: 'Can you revive teammates in Roblox Pressure?',
      a: 'Yes, but only if you possess a Revive Token (purchasable with Kroner or earned from special code drops). Dead players enter spectator mode and can be resurrected at the start of specific checkpoint chambers.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-semibold">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <span>Hadopelagic Submarine Survival Manual</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox Pressure <span className="text-red-400">Room 1 to 100 Survival Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Comprehensive field guide for escaping the underwater blacksite. Learn exact audio cues for every Angler variation, minigame mechanics for Pandemonium, locker safety protocols, and how to conquer the final Searchlights trench boss.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-red-400 transition-colors shadow-lg shadow-red-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Room Survival Odds Simulator</span>
          </Link>
          <Link
            href="/monster-index"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-xs hover:bg-slate-700 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>View 16+ Monster Entity Index</span>
          </Link>
        </div>
      </div>

      {/* Core Survival Protocols */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">4 Mandatory Survival Directives</h2>
          <p className="text-xs text-slate-400 mt-1">
            Violating any of these core containment procedures will result in instant death:
          </p>
        </div>

        <div className="space-y-6">
          {survivalRules.map((rule, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-extrabold text-lg shrink-0">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{rule.rule}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{rule.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Sector Floor Progression */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Floor Progression & Threat Milestones</h2>
          <p className="text-xs text-slate-400 mt-1">
            Understanding the layout and hazards of each structural depth zone:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phaseBreakdowns.map((phase, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>{phase.range}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{phase.overview}</p>
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs text-amber-300">
                <span className="font-bold">Sector Tip: </span>
                <span>{phase.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-red-400" />
          <span>Frequently Asked Questions (Pressure FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
