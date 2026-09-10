'use client';

import { useState, useMemo } from 'react';
import { AlertTriangle, Shield, Play, Sparkles, Check, Copy, Flame, Eye, Skull } from 'lucide-react';

export default function PressureCalculatorClient() {
  const [doorNumber, setDoorNumber] = useState(45);
  const [hasFlashBeacon, setHasFlashBeacon] = useState(true);
  const [hasMediKit, setHasMediKit] = useState(false);
  const [hasLantern, setHasLantern] = useState(true);
  const [playerReactionTime, setPlayerReactionTime] = useState<'fast' | 'normal' | 'slow'>('fast');

  const [simEncounter, setSimEncounter] = useState<{
    status: 'Survives' | 'Eliminated' | 'Clear Room';
    entity: string;
    details: string;
    actionTaken: string;
  } | null>(null);

  const calculations = useMemo(() => {
    // Room scaling math
    const depthPct = doorNumber / 100;
    const rushOdds = Math.min(65, Math.round(15 + depthPct * 45));
    const pandemoniumOdds = doorNumber >= 30 ? Math.min(25, Math.round((doorNumber - 25) * 0.4)) : 0;
    const eyefestationOdds = doorNumber >= 15 ? Math.min(40, Math.round(10 + depthPct * 25)) : 0;

    let baseSurvival = 85;
    if (playerReactionTime === 'fast') baseSurvival += 10;
    else if (playerReactionTime === 'slow') baseSurvival -= 25;

    if (hasFlashBeacon) baseSurvival += 5;
    if (hasMediKit) baseSurvival += 5;
    if (doorNumber > 75) baseSurvival -= 20;

    const netSurvivalOdds = Math.max(15, Math.min(99, baseSurvival));

    let dangerLevel = 'Moderate Threat';
    let dangerColor = 'text-yellow-400';
    if (doorNumber > 80) {
      dangerLevel = 'Extreme Lethality Zone (The Ridge)';
      dangerColor = 'text-rose-500';
    } else if (doorNumber > 50) {
      dangerLevel = 'Severe Danger (Deep Hadal)';
      dangerColor = 'text-amber-400';
    } else if (doorNumber < 20) {
      dangerLevel = 'Low Threat (Surface Access)';
      dangerColor = 'text-emerald-400';
    }

    return {
      rushOdds,
      pandemoniumOdds,
      eyefestationOdds,
      netSurvivalOdds,
      dangerLevel,
      dangerColor,
    };
  }, [doorNumber, hasFlashBeacon, hasMediKit, playerReactionTime]);

  const simulateNextDoor = () => {
    const roll = Math.random() * 100;
    if (roll < calculations.pandemoniumOdds) {
      // Pandemonium
      const survived = playerReactionTime === 'fast' || (playerReactionTime === 'normal' && Math.random() > 0.3);
      setSimEncounter({
        status: survived ? 'Survives' : 'Eliminated',
        entity: '🚨 Pandemonium (Mini-Game Encounter)',
        details: survived
          ? 'Successfully stabilized cursor inside locker minigame until entity roared past.'
          : 'Locker minigame failed! Cursor drifted out of the target circle and entity decapitated player.',
        actionTaken: 'Entered locker and balanced stabilization circle.',
      });
    } else if (roll < calculations.pandemoniumOdds + calculations.rushOdds) {
      // Angler / Rush Variant
      const survived = playerReactionTime !== 'slow' || hasMediKit;
      setSimEncounter({
        status: survived ? 'Survives' : 'Eliminated',
        entity: '⚡ Angler / Pinkie Sound Rush',
        details: survived
          ? 'Heard distant audio screech, entered nearest locker before node lights passed.'
          : 'Reaction too slow! Angler swept through the corridor before finding an empty locker.',
        actionTaken: 'Took shelter in standard storage locker.',
      });
    } else if (roll < calculations.pandemoniumOdds + calculations.rushOdds + calculations.eyefestationOdds) {
      // Eyefestation
      const countered = hasFlashBeacon || playerReactionTime !== 'slow';
      setSimEncounter({
        status: countered ? 'Survives' : 'Eliminated',
        entity: '👁️ Eyefestation Green Glow',
        details: countered
          ? hasFlashBeacon
            ? 'Used Flash Beacon to stun the eye cluster through the glass window, safely passing.'
            : 'Averted camera view away from window glass to avoid mental damage drain.'
          : 'Stared into green radiation beam too long! Brain damaged to zero health.',
        actionTaken: hasFlashBeacon ? 'Discharged Flash Beacon' : 'Looked at floor / wall',
      });
    } else {
      // Clear room
      setSimEncounter({
        status: 'Clear Room',
        entity: '🚪 Safe Passage',
        details: 'Lights remained stable. No node entities detected in this sector. Looted 45 Kroner coins.',
        actionTaken: 'Advanced to next checkpoint.',
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Parameters Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Room & Inventory */}
        <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-400" />
              <span>Room Depth & Loadout Settings</span>
            </h2>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border border-slate-800 bg-slate-950 ${calculations.dangerColor}`}>
              {calculations.dangerLevel}
            </span>
          </div>

          <div className="space-y-4">
            {/* Door Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Room Number (Door Depth)</span>
                <span className="text-red-400 font-bold text-sm">Door {doorNumber} / 100</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={doorNumber}
                onChange={(e) => setDoorNumber(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Door 1 (Intro)</span>
                <span>Door 50 (Mid-Run)</span>
                <span>Door 100 (The Ridge)</span>
              </div>
            </div>

            {/* Reaction Speed */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 block">Locker Reaction Speed Window</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fast', label: 'Fast (< 1.5s)' },
                  { id: 'normal', label: 'Normal (1.5s - 2.5s)' },
                  { id: 'slow', label: 'Slow (> 2.5s)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPlayerReactionTime(item.id as any)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      playerReactionTime === item.id
                        ? 'bg-red-600 text-white border-red-400 shadow-md shadow-red-600/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Defensive Items */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-semibold text-slate-300 block">Equipped Survival Gear</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasFlashBeacon}
                    onChange={(e) => setHasFlashBeacon(e.target.checked)}
                    className="rounded border-slate-700 text-red-500 focus:ring-red-500"
                  />
                  <span className="text-slate-200">Flash Beacon (+5% Eyefestation Stun)</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasMediKit}
                    onChange={(e) => setHasMediKit(e.target.checked)}
                    className="rounded border-slate-700 text-red-500 focus:ring-red-500"
                  />
                  <span className="text-slate-200">Medi-Kit (+Revival Cushion)</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasLantern}
                    onChange={(e) => setHasLantern(e.target.checked)}
                    className="rounded border-slate-700 text-red-500 focus:ring-red-500"
                  />
                  <span className="text-slate-200">Lantern (+Dark Room Visibility)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Calculations */}
        <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-red-900/40 p-6 rounded-2xl shadow-xl">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Room Threat Probabilities</span>
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Angler/Rush Odds</span>
              <span className="text-xl font-black text-rose-400">{calculations.rushOdds}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Pandemonium</span>
              <span className="text-xl font-black text-amber-400">{calculations.pandemoniumOdds}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Eyefestation</span>
              <span className="text-xl font-black text-emerald-400">{calculations.eyefestationOdds}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Net Survival Rate</span>
              <span className="text-xl font-black text-cyan-300">{calculations.netSurvivalOdds}%</span>
            </div>
          </div>

          <button
            type="button"
            onClick={simulateNextDoor}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/30 active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Open Next Door ({doorNumber + 1})</span>
          </button>
        </div>
      </div>

      {/* Simulation Encounter Log */}
      {simEncounter && (
        <div className="p-6 rounded-2xl border border-red-800/60 bg-slate-950 space-y-3 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base">{simEncounter.entity}</span>
            </div>
            <span
              className={`text-xs font-black px-3 py-1 rounded-full border ${
                simEncounter.status === 'Survives'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                  : simEncounter.status === 'Clear Room'
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                  : 'bg-rose-950 text-rose-300 border-rose-500/40'
              }`}
            >
              {simEncounter.status}
            </span>
          </div>
          <p className="text-xs text-slate-300">{simEncounter.details}</p>
          <div className="text-[11px] text-slate-400 pt-1">
            <strong>Action Taken:</strong> {simEncounter.actionTaken}
          </div>
        </div>
      )}
    </div>
  );
}
