export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Pressure Codes (September 2026)</h1>
        <p className="text-slate-400 text-sm mt-1">Tested and verified active redeem codes for Pressure.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
              <th className="p-4">Code</th>
              <th className="p-4">Reward</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">ModifiersAndMovies</td>
              <td className="p-4 text-slate-300">2,500 Kroner</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">wawa</td>
              <td className="p-4 text-slate-300">1 Free Revive</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
}
