import React, { useState } from 'react';
import { Weakness, ScreenId } from '../types';
import {
  ShieldAlert,
  AlertOctagon,
  TrendingDown,
  ArrowRight,
  Eye,
  CheckCircle,
  HelpCircle,
  Target,
  FileText,
  Flame,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface WeaknessAnalysisScreenProps {
  weaknesses: Weakness[];
  onNavigate: (screen: ScreenId) => void;
  onSelectPriorityForPrep?: (rank: 1 | 2 | 3) => void;
}

export const WeaknessAnalysisScreen: React.FC<WeaknessAnalysisScreenProps> = ({
  weaknesses,
  onNavigate,
  onSelectPriorityForPrep,
}) => {
  // All three ranks have in-depth tactical analysis expanded by default for complete consistency
  const [expandedWeaknesses, setExpandedWeaknesses] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });

  const toggleExpand = (rank: number) => {
    setExpandedWeaknesses((prev) => ({
      ...prev,
      [rank]: !prev[rank],
    }));
  };

  const allExpanded = Object.values(expandedWeaknesses).every(Boolean);

  const toggleAll = () => {
    const nextState = !allExpanded;
    setExpandedWeaknesses({
      1: nextState,
      2: nextState,
      3: nextState,
    });
  };

  const handleConvertToPrep = (rank: 1 | 2 | 3) => {
    if (onSelectPriorityForPrep) {
      onSelectPriorityForPrep(rank);
    }
    onNavigate('preparation');
  };

  return (
    <div id="screen-weakness-analysis" className="space-y-6 pb-12">
      {/* Executive Briefing Banner */}
      <section id="weakness-summary-card" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Scouting Verdict
              </span>
              <span className="text-xs font-bold text-slate-500">
                Ranked by Tactical Vulnerability
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1.5">
              3 Primary Opponent Weaknesses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Coaching staff review: Concrete statistical evidence and tactical flaws identified in Vanguard FC's setup for matchday exploitation.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl text-xs font-bold text-red-800">
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="text-slate-900 font-extrabold">3 Flaws Ranked</div>
              <div className="text-red-700 text-[11px]">Rank #1 is Critical Match-Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Weaknesses Cards */}
      <section id="ranked-weaknesses-list" className="space-y-5">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            All 3 Ranks Complete Tactical Evidence
          </span>
          <button
            onClick={toggleAll}
            className="text-xs font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
          >
            {allExpanded ? 'Collapse All Details' : 'Expand All Details'}
          </button>
        </div>

        {weaknesses.map((weakness) => {
          const isRank1 = weakness.rank === 1;
          const isRank2 = weakness.rank === 2;
          const isExpanded = !!expandedWeaknesses[weakness.rank];

          const severityBadge =
            weakness.severity === 'Critical'
              ? 'bg-red-600 text-white border-red-700'
              : weakness.severity === 'High'
              ? 'bg-amber-600 text-white border-amber-700'
              : 'bg-orange-600 text-white border-orange-700';

          return (
            <article
              key={weakness.id}
              id={`weakness-card-rank-${weakness.rank}`}
              className={`bg-white rounded-2xl border transition-all shadow-sm overflow-hidden ${
                isRank1
                  ? 'border-red-300 ring-2 ring-red-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    {/* Rank Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-black shrink-0 shadow-sm ${
                        isRank1
                          ? 'bg-red-600 text-white'
                          : isRank2
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-800 text-white'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold leading-none">Rank</span>
                      <span className="text-2xl leading-none font-black">#{weakness.rank}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${severityBadge}`}
                        >
                          {weakness.severity} Priority
                        </span>
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {weakness.phaseOfPlay}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                        {weakness.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        {weakness.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(weakness.rank)}
                    className="self-end sm:self-auto text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs min-h-[38px] transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Tactical Details' : 'Show Tactical Details'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>
                </div>

                {/* Summary Explanation */}
                <div className="mt-4 p-3.5 bg-white rounded-xl border border-slate-200/80">
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    {weakness.summaryExplanation}
                  </p>
                </div>
              </div>

              {/* Supporting Fictional Statistics (Always visible for arm's length phone glance) */}
              <div className="p-5 sm:p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-500" />
                  <span>Supporting Statistical Evidence</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {weakness.supportingStats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-slate-600 mb-1">
                        {stat.label}
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-red-700 tracking-tight">
                        {stat.value}
                      </div>
                      <span className="text-xs text-slate-500 font-medium mt-1">
                        {stat.context}
                      </span>
                    </div>
                  ))}
                </div>

                {/* In-Depth Tactical Breakdown (Consistent across all 3 ranks) */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-slate-200 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span>In-Depth Tactical Analysis &amp; Mechanics</span>
                      </h4>
                      <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-200">
                        {weakness.detailedAnalysis}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-3 bg-red-50/50 rounded-xl border border-red-100">
                        <span className="font-bold text-red-900 block mb-1">
                          Tactical Root Cause:
                        </span>
                        <p className="text-slate-700">{weakness.tacticalRootCause}</p>
                      </div>

                      <div className="p-3 bg-slate-100 rounded-xl border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">
                          Target Pitch Exploitation Area:
                        </span>
                        <p className="text-slate-700 font-semibold">{weakness.pitchArea}</p>
                      </div>
                    </div>

                    {/* Video / Scout Observation Log */}
                    <div className="p-3.5 bg-slate-900 text-white rounded-xl">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Staff Observation Notes</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {weakness.observationNotes.map((note, nIdx) => (
                          <li key={nIdx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Quick Conversion CTA */}
                <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">
                    Linked to Match Prep Priority #{weakness.rank} (Tactical &amp; Training Drills)
                  </span>
                  <button
                    id={`btn-prep-link-${weakness.rank}`}
                    onClick={() => handleConvertToPrep(weakness.rank)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 min-h-[42px]"
                  >
                    <span>View Preparation Priority #{weakness.rank}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Bottom Global Transition Bar */}
      <section id="weakness-bottom-navigation" className="bg-gradient-to-r from-emerald-800 to-slate-900 text-white p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Next Coaching Step
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white">
            Convert Evidence into Match Preparation Priorities
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Review the exact tactical instructions and training drills tailored for each weakness.
          </p>
        </div>
        <button
          id="btn-goto-preparation"
          onClick={() => onNavigate('preparation')}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 shrink-0 min-h-[46px]"
        >
          <span>Open Match Preparation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
