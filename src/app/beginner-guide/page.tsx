export default function BeginnerGuidePage() {
  const rules = [
    { rule: "Never sprint unless chased", detail: "Sprinting makes noise. Entities are attracted to sound. Walk by default — only sprint when you see a threat.", icon: "🚶" },
    { rule: "Check lockers before entering rooms", detail: "Always scan each room for available lockers before moving in. You need an escape route if Pandemonium spawns.", icon: "🚪" },
    { rule: "Never look at Eyefestation", detail: "If you see a green glow through a window, turn your camera away instantly. Looking = instant kill.", icon: "👁️" },
    { rule: "Use Vitamins strategically", detail: "Vitamins restore HP. Don't waste them on minor damage — save for after boss rooms or multi-entity floors.", icon: "💊" },
    { rule: "Revive teammates with Reviver tokens", detail: "Revive tokens let you bring back dead teammates. Always keep one if you play co-op.", icon: "❤️" },
    { rule: "Listen for audio cues", detail: "Every entity has unique sound. Learn the sounds — loud clanging = Pandemonium, hum = Eyefestation.", icon: "🔊" },
  ];

  const items = [
    { name: "Flashlight", use: "Illuminates dark rooms. Essential for Room 50+. Battery drains — find spares.", rarity: "Common" },
    { name: "Vitamin", use: "Restores 25 HP. Found in cabinets and boxes throughout each floor.", rarity: "Common" },
    { name: "Reviver Token", use: "Revives a dead teammate instantly. Very rare — obtained from codes or floor rewards.", rarity: "Rare" },
    { name: "Kroner Coin", use: "In-game currency. Used to buy items from the Shop between runs.", rarity: "Common" },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Beginner Survival Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Core rules, item knowledge, and survival mindset for Roblox Pressure newcomers.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-red-400">⚠️ 6 Survival Rules That Keep You Alive</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {rules.map((r, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 hover:border-red-800/50 rounded-xl p-5 flex gap-4 transition">
              <div className="text-2xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="font-bold text-white text-sm">{r.rule}</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🎒 Item Guide</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">{item.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${item.rarity === 'Rare' ? 'bg-purple-950 text-purple-300 border-purple-700' : 'bg-slate-800 text-slate-300 border-slate-700'}`}>{item.rarity}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.use}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
