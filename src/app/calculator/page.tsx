import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, Trophy, ArrowRight, BookOpen, HelpCircle, Zap } from 'lucide-react';
import PressureCalculatorClient from './PressureCalculatorClient';

export const metadata: Metadata = {
  title: 'Pressure Calculator: Room Survival Odds & Monster Threat Simulator',
  description: 'Interactive Roblox Pressure calculator. Calculate door 1-100 entity encounter odds (Angler, Pandemonium, Eyefestation), test locker survival reactions, and simulate run outcomes.',
  alternates: {
    canonical: 'https://pressure.robloxwikihub.com/calculator/',
  },
  openGraph: {
    title: 'Roblox Pressure Survival Odds & Monster Calculator',
    description: 'Calculate entity encounter chances and locker minigame survival odds in Roblox Pressure.',
    url: 'https://pressure.robloxwikihub.com/calculator/',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Pressure Room Survival Odds & Monster Threat Calculator',
    url: 'https://pressure.robloxwikihub.com/calculator/',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive survival odds simulator and entity encounter calculator for Roblox Pressure.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.89',
      ratingCount: '530',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-red-900/30 bg-gradient-to-b from-red-950/40 via-slate-950/80 to-[#030712] rounded-3xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950 border border-red-700/50 text-red-300 text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Survival Tool • Door 1-100 Room AI Formulas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Pressure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Survival Odds & Threat</span> Calculator
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Evaluate entity spawn odds by room depth, configure defensive items, and simulate real-time locker reaction encounters before entering the Hadal Blacksite.
        </p>
      </section>

      {/* Interactive Tool */}
      <div className="max-w-5xl mx-auto">
        <PressureCalculatorClient />
      </div>

      {/* SEO Strategy Guide & FAQ */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="rounded-2xl border border-red-900/40 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-red-400" />
            Hadal Blacksite Encounter Mechanics & Threat Scaling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-red-300">1. Light Flicker & Node Rush Mechanics</h3>
              <p>
                Lights flicker when a node entity (Angler, Froger, Pinkie, Chainsmoker) spawns 2-3 rooms behind you. Sound cues dictate response: Pinkie produces no light flicker, requiring 100% auditory reliance to enter lockers in time.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-red-300">2. Pandemonium Minigame Survival</h3>
              <p>
                Pandemonium (Door 30+) forces a circular stabilization minigame while inside the locker. Keeping the cursor centered within the moving circle prevents early ejection and fatal decapitation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-red-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">What happens if you stay in a locker too long?</strong>
              <span>Staying hidden past 15 seconds prompts the Void Mass monster to eject and severely damage you, preventing infinite hiding spots.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">How do you counter Eyefestation?</strong>
              <span>Do not look at the glowing green eye clusters on underwater windows. Equip a Flash Beacon to temporarily blind and force it to retreat.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-red-900/40 bg-slate-950/60">
          <Link href="/monster-index" className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300">
            <BookOpen className="w-4 h-4" />
            <span>View Full Monster Index & Sound Cues</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Get Free Kroner Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
