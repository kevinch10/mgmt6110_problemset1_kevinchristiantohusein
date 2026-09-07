import React from 'react';
import { Shield, Users, Radio } from 'lucide-react';
import { UpcomingMatch } from '../types';

interface HeaderProps {
  matchData: UpcomingMatch;
}

export const Header: React.FC<HeaderProps> = ({ matchData }) => {
  return (
    <header id="scoutedge-header" className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center shadow-inner">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">ScoutEdge</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Tactical Pro
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Football Match Preparation &amp; Opponent Scouting
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-300">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Coaching Staff Mode</span>
            </div>
            <div className="bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Next Match:</span> {matchData.opponentName}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
