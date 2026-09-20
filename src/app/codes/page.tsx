import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pressure Codes — Kroner, Revives & Joke Codes',
  description: 'Pressure redeem codes. Includes the joke codes that take Kroner away, plus the full expired archive.',
  alternates: {
    canonical: '/codes',
  },
};

const ACTIVE_CODES = [
  { code: 'MiserableLaunchOnceAgain', reward: '3 Revives', note: '' },
  { code: 'YOURTAKINGTOOLONG', reward: '500 Kroner', note: '' },
  { code: 'ModifiersAndMovies', reward: '2,500 Kroner', note: 'Single-source report — test in game' },
  { code: 'wawa', reward: '1 Revive', note: 'Single-source report — test in game' },
];

const JOKE_CODES = [
  { code: 'Gullible', reward: 'Takes away 300 Kroner' },
  { code: 'Sucker', reward: 'Takes away 300 Kroner' },
];

const EXPIRED_CODES = [
  { code: 'WasteOfTime', reward: '2 Revives' },
  { code: 'slederman', reward: '2 Revives' },
  { code: 'SMILEYBOMB!!!', reward: '500 Kroner' },
  { code: 'ApologyTour', reward: '750 Kroner' },
  { code: '2YearsWasted', reward: '750 Kroner' },
  { code: '200M', reward: '500 Kroner' },
  { code: 'Christmas!!!', reward: '300 Kroner' },
  { code: 'sorry', reward: '150 Kroner' },
  { code: 'Raveyard', reward: '2 Revives' },
  { code: 'Decay', reward: '1 Revive' },
  { code: 'Fraud', reward: '2 Revives' },
];

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Codes</h1>
        <p className="text-slate-400 text-sm mt-1">Redeem codes cross-checked against the community wiki and code trackers. Unusual for Roblox games, some Pressure codes take Kroner away instead of giving it — those are marked below.</p>
      </div>

      <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-200 leading-relaxed">
          <strong>Watch out for joke codes:</strong> Gullible and Sucker each <strong>remove</strong> 300 Kroner from your balance. The developers added them as pranks during the Friendly Fire Update — redeem them only if you find that funny.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-emerald-400 font-mono uppercase">Active Codes ({ACTIVE_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
              <th className="p-4">Code</th>
              <th className="p-4">Reward</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVE_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-cyan-400">{item.code}</td>
                <td className="p-4 text-slate-300">
                  {item.reward}
                  {item.note ? <span className="block text-[11px] text-slate-500 mt-0.5">{item.note}</span> : null}
                </td>
                <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900/60 border border-rose-900/40 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-rose-400 font-mono uppercase">Joke Codes — They Take Kroner Away ({JOKE_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <tbody>
            {JOKE_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-amber-300">{item.code}</td>
                <td className="p-4 text-amber-200">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-1 rounded-full font-semibold">Prank</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-slate-400 font-mono uppercase">Expired Codes ({EXPIRED_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <tbody>
            {EXPIRED_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-slate-500 line-through">{item.code}</td>
                <td className="p-4 text-slate-500">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full font-semibold">Expired</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
