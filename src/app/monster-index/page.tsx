import React from 'react';
import type { Metadata } from 'next';
import MonsterIndexClient from './MonsterIndexClient';
import { MONSTERS_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Pressure Monster & Entity Index (September 2026) | Survival Guide',
  description: 'Complete survival guide and entity index for Roblox Pressure. Entity audio cues, room triggers, and angler evasion tactics.',
  alternates: {
    canonical: '/monster-index',
  },
  keywords: [
    'pressure monster guide',
    'roblox pressure entities',
    'pressure angler survival',
    'pressure eyefestation',
    'pressure pandemonium strategy',
    'pressure entity tier list'
  ],
};

export default function MonsterIndexPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roblox Pressure Entity & Monster Threat Guide',
    description: 'Threat rankings and survival tactics for entities in Roblox Pressure.',
    numberOfItems: MONSTERS_DATA.length,
    itemListElement: MONSTERS_DATA.map((monster, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: monster.name,
      description: `${monster.danger} threat entity. Audio cue: ${monster.audioCue}. Strategy: ${monster.strategy}`,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Monster & Entity Survival Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Complete survival strategies, audio cues, and counter-tactics for every entity in Roblox Pressure (Updated September 2026).</p>
      </div>

      <MonsterIndexClient />
    </div>
  );
}
