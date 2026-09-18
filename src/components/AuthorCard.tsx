import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Dante Vance',
  role = 'Abyssal Blacksite Containment Specialist',
  experience = '250+ Expeditions & Room 100 Verified',
  patchVersion = 'Update v1.8 Verified',
  lastUpdated = '',
  editorialNote = 'All entity rush timings, locker audio frequency thresholds, and Void-mass detection checks are recorded live inside Hadal Blacksite runs.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-slate-900/70 border border-red-900/30 p-4 sm:p-5 backdrop-blur-md my-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-red-950/60">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-lg shadow-inner">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                ✓ Containment Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {role} • <span className="text-slate-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-red-500/10 text-red-300 border border-red-500/20">
            ⚡ {patchVersion}
          </span>
          
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
      <div className="mt-2 pt-2 border-t border-cyan-900/30 text-right">
        <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs underline">Editorial Standards & Methodology →</a>
      </div>
    </div>
  );
}
