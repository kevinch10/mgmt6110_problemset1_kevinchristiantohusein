import React, { useState } from 'react';
import { MatchPreparationPriority, ScreenId } from '../types';
import {
  Target,
  Dumbbell,
  Shield,
  Zap,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  ArrowLeft,
  Users,
  Flag,
  ListOrdered,
  Sparkles,
} from 'lucide-react';

interface MatchPreparationScreenProps {
  priorities: MatchPreparationPriority[];
  selectedRank?: 1 | 2 | 3;
  onNavigate: (screen: ScreenId) => void;
}

export const MatchPreparationScreen: React.FC<MatchPreparationScreenProps> = ({
  priorities,
  selectedRank = 1,
  onNavigate,
}) => {
  const [activeRank, setActiveRank] = useState<1 | 2 | 3>(selectedRank);
  const [completedDrills, setCompletedDrills] = useState<Record<string, boolean>>({});

  const toggleDrillCompleted = (id: string) => {
    setCompletedDrills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentPriority =
    priorities.find((p) => p.rank === activeRank) || priorities[0];

  return (
    <div id="screen-match-preparation" className="space-y-6 pb-12">
      {/* Executive Briefing Banner */}
      <section id="preparation-summary-card" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Actionable Strategy
              </span>
              <span className="text-xs font-bold text-slate-500">
                Staff Match-Planning Protocol
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1.5">
              Match Preparation Priorities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Converting Vanguard FC's three weaknesses into decisive tactical instructions and weekly training pitch sessions.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-900 shrink-0 self-start sm:self-auto">
            <Target className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-slate-900 font-extrabold">3 Action Priorities</div>
              <div className="text-emerald-700 text-[11px]">Tactical + Training Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Selector Tabs (1, 2, 3) */}
      <section id="priority-selector-tabs" className="grid grid-cols-3 gap-2">
        {priorities.map((item) => {
          const isActive = activeRank === item.rank;
          return (
            <button
              key={item.id}
              id={`tab-priority-${item.rank}`}
              onClick={() => setActiveRank(item.rank)}
              className={`p-3 sm:p-4 rounded-xl border text-left transition-all relative min-h-[64px] ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-400/40'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-md ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Priority #{item.rank}
                </span>
                {completedDrills[item.id] && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
              </div>
              <div
                className={`text-xs sm:text-sm font-bold truncate ${
                  isActive ? 'text-white' : 'text-slate-900'
                }`}
              >
                {item.priorityTitle}
              </div>
            </button>
          );
        })}
      </section>

      {/* Active Priority Card */}
      <section
        id={`active-priority-${currentPriority.rank}`}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        {/* Header with Objective & Linked Weakness */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider bg-slate-900 text-white px-3 py-1 rounded-full">
              Preparation Priority #{currentPriority.rank}
            </span>
            <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
              Addresses Weakness #{currentPriority.rank}: {currentPriority.linkedWeaknessTitle}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {currentPriority.priorityTitle}
          </h3>

          <div className="mt-3 p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-0.5">
              Strategic Objective:
            </span>
            <p className="text-sm sm:text-base text-emerald-950 font-medium leading-relaxed">
              {currentPriority.objective}
            </p>
          </div>
        </div>

        {/* Two Core Focus Modules: Tactical Focus & Training Focus */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Module 1: Tactical Focus (Matchday Game Model) */}
          <div id="tactical-focus-module" className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900">
                  1. Tactical Focus (Matchday Game Model)
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Direct matchday instructions for player roles and phases of play.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* In Possession */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>In-Possession Execution</span>
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-normal">
                  {currentPriority.tacticalFocus.inPossession}
                </p>
              </div>

              {/* Out of Possession */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-700" />
                  <span>Out-of-Possession Structure</span>
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-normal">
                  {currentPriority.tacticalFocus.outOfPossession}
                </p>
              </div>
            </div>

            {/* Transition & Trigger */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-1.5">
                <Flag className="w-3.5 h-3.5 text-amber-700" />
                <span>Transition Moment &amp; Pitch Trigger</span>
              </span>
              <div className="space-y-2 text-sm text-slate-800">
                <p>
                  <strong className="text-slate-900">Transition Rule: </strong>
                  {currentPriority.tacticalFocus.transitionMoment}
                </p>
                <p className="pt-1 border-t border-amber-200/70 text-xs sm:text-sm font-medium text-amber-950">
                  <strong className="text-amber-900">Visual Pitch Trigger: </strong>
                  {currentPriority.tacticalFocus.pitchTrigger}
                </p>
              </div>
            </div>

            {/* Key Player Roles */}
            <div className="p-3.5 bg-slate-100/90 rounded-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Assigned Player Roles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentPriority.tacticalFocus.keyPlayerRoles.map((role, rIdx) => (
                  <div
                    key={rIdx}
                    className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module 2: Training Focus (Practical Pitch Drills) */}
          <div id="training-focus-module" className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    2. Training Focus (Pitch Drill &amp; Session)
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Weekly practice drill designed to train this priority before matchday.
                  </p>
                </div>
              </div>

              {/* Mark Completed Button */}
              <button
                onClick={() => toggleDrillCompleted(currentPriority.id)}
                className={`self-start sm:self-auto px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all min-h-[38px] ${
                  completedDrills[currentPriority.id]
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedDrills[currentPriority.id]
                    ? 'Training Session Completed'
                    : 'Mark Session Done'}
                </span>
              </button>
            </div>

            {/* Drill Meta Header */}
            <div className="bg-slate-900 text-white p-4 rounded-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {currentPriority.trainingFocus.sessionDay}
                </span>
                <span className="text-xs font-semibold bg-slate-800 px-2.5 py-0.5 rounded-full text-slate-300">
                  {currentPriority.trainingFocus.drillType}
                </span>
              </div>
              <h5 className="text-lg sm:text-xl font-black text-white">
                {currentPriority.trainingFocus.drillName}
              </h5>
              <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="text-slate-400">Pitch Grid: </span>
                  <strong className="text-white">
                    {currentPriority.trainingFocus.pitchDimensions}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400">Numbers: </span>
                  <strong className="text-white">
                    {currentPriority.trainingFocus.playerStructure}
                  </strong>
                </div>
              </div>
            </div>

            {/* Drill Mechanics Card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Drill Mechanics &amp; Rules
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentPriority.trainingFocus.drillDetails.duration}</span>
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-800 space-y-2">
                <p>
                  <strong className="text-slate-900">Drill Setup: </strong>
                  {currentPriority.trainingFocus.drillDetails.setup}
                </p>
                <p>
                  <strong className="text-slate-900">Constraints / Rules: </strong>
                  {currentPriority.trainingFocus.drillDetails.rules}
                </p>
              </div>

              {/* Coaching Shouts / Triggers */}
              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1.5">
                  Live Coaching Triggers (Verbal Cues from Staff):
                </span>
                <div className="space-y-1.5">
                  {currentPriority.trainingFocus.drillDetails.coachingTriggers.map((cue, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs sm:text-sm font-semibold text-emerald-950 flex items-start gap-2"
                    >
                      <span className="text-emerald-600 font-bold shrink-0">🗣️</span>
                      <span>{cue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Coaching Points */}
              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  Key Technical Corrections to Watch For:
                </span>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                  {currentPriority.trainingFocus.coachingPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="leading-normal">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Step Switcher */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={() => setActiveRank((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : 3))}
            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-slate-50 min-h-[40px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Priority</span>
          </button>

          <span className="text-xs sm:text-sm font-extrabold text-slate-600">
            Priority {currentPriority.rank} of {priorities.length}
          </span>

          <button
            onClick={() => setActiveRank((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : 1))}
            className="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-slate-800 min-h-[40px]"
          >
            <span>Next Priority</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </section>

      {/* Review All 3 Summary Table (Glanceable on Phone) */}
      <section id="all-priorities-summary" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <h4 className="text-base sm:text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-emerald-600" />
          <span>Complete Match Preparation Summary (All 3 Priorities)</span>
        </h4>

        <div className="space-y-3">
          {priorities.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveRank(item.rank)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                activeRank === item.rank
                  ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-400/40'
                  : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-black uppercase text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Priority #{item.rank}
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  Drill: {item.trainingFocus.drillName.split(':')[0]}
                </span>
              </div>
              <h5 className="font-bold text-sm sm:text-base text-slate-900">
                {item.priorityTitle}
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-0.5">
                {item.objective}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
