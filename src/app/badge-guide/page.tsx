export default function BadgeGuidePage() {
  const badges = [
    { name: "First Steps", desc: "Complete Room 1 for the first time.", difficulty: "Easy", reward: "None" },
    { name: "Floor 50 Survivor", desc: "Reach Room 50 in a single run without dying.", difficulty: "Medium", reward: "50 Kroner Coins" },
    { name: "Eye Contact... Wait No", desc: "Look at Eyefestation and somehow survive (very rare bug trigger).", difficulty: "Extreme", reward: "Special Title" },
    { name: "Locker Legend", desc: "Hide in a locker 50 times across all runs.", difficulty: "Easy", reward: "20 Kroner Coins" },
    { name: "No Flashlight Run", desc: "Complete 10 consecutive dark rooms without using a flashlight.", difficulty: "Hard", reward: "Flashlight Skin" },
    { name: "Centennial", desc: "Reach Room 100 for the first time.", difficulty: "Hard", reward: "100 Kroner Coins + Exclusive Badge Frame" },
  ];

  const colors: Record<string, string> = {
    Easy: "bg-emerald-950 text-emerald-300 border-emerald-700",
    Medium: "bg-amber-950 text-amber-300 border-amber-700",
    Hard: "bg-red-950 text-red-300 border-red-700",
    Extreme: "bg-purple-950 text-purple-300 border-purple-700",
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Badge & Achievement Guide</h1>
        <p className="text-slate-400 text-sm mt-1">How to unlock every badge in Pressure — from easy first-runs to ultra-hard challenge clears.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {badges.map((b, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🏅 {b.name}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-bold ${colors[b.difficulty]}`}>{b.difficulty}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
            <div className="text-xs text-slate-500">
              <span className="text-slate-400 font-semibold">Reward: </span>{b.reward}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
