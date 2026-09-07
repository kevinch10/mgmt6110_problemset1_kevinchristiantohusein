import React, { useState } from 'react';
import {
  UpcomingMatch,
  RecentResult,
  PerformanceStat,
  ScreenId,
} from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Minus,
  ArrowRight,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface MatchOverviewScreenProps {
  matchData: UpcomingMatch;
  recentResults: RecentResult[];
  performanceStats: PerformanceStat[];
  onNavigate: (screen: ScreenId) => void;
}

export const MatchOverviewScreen: React.FC<MatchOverviewScreenProps> = ({
  matchData,
  recentResults,
  performanceStats,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAllStats, setShowAllStats] = useState<boolean>(true);

  const categories = ['All', 'Defense', 'Transition', 'Attacking', 'Discipline & Set Pieces'];

  const MAX_STATS_DISPLAY = 10;

  const baseStats =
    selectedCategory === 'All'
      ? performanceStats
      : performanceStats.filter((stat) => stat.category === selectedCategory);

  const displayedStats = baseStats.slice(0, MAX_STATS_DISPLAY);

  const vulnerabilityCount = displayedStats.filter(
    (s) => s.status === 'Vulnerability'
  ).length;

  return (
    <div id="screen-match-overview" className="space-y-6 pb-12">
      {/* Match Fixture Banner */}
      <section id="upcoming-fixture-card" className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-semibold tracking-wide text-slate-200">
                {matchData.competition} • {matchData.matchweek}
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full">
              Matchday Scout Dossier
            </span>
          </div>

          {/* Teams Faceoff Header */}
          <div className="grid grid-cols-11 items-center gap-2 my-2">
            {/* Home Team */}
            <div className="col-span-5 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-700 border-2 border-emerald-400 flex items-center justify-center font-black text-xl sm:text-2xl text-white shadow-md">
                {matchData.homeTeamBadgeLetters}
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  Our Team (Home)
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {matchData.homeTeamName}
                </h3>
              </div>
            </div>

            {/* VS Divider */}
            <div className="col-span-1 text-center flex flex-col items-center justify-center">
              <span className="text-xs sm:text-sm font-black text-slate-400 bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700">
                VS
              </span>
            </div>

            {/* Upcoming Opponent */}
            <div className="col-span-5 text-center sm:text-right flex flex-col sm:flex-row-reverse items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-700 border-2 border-red-400 flex items-center justify-center font-black text-xl sm:text-2xl text-white shadow-md">
                {matchData.opponentBadgeLetters}
              </div>
              <div>
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block">
                  Upcoming Opponent
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {matchData.opponentName}
                </h3>
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  {matchData.opponentPosition}
                </span>
              </div>
            </div>
          </div>

          {/* Match Meta Grid */}
          <div className="mt-5 pt-4 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{matchData.matchDate}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{matchData.kickoffTime}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">{matchData.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">Ref: {matchData.referee}</span>
            </div>
          </div>
        </div>

        {/* Executive Opponent Summary */}
        <div className="p-5 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Tactical Profile &amp; Manager Setup
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                Formation: {matchData.opponentFormation}
              </span>
              <span className="bg-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                Manager: {matchData.opponentManager}
              </span>
              <span className="bg-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                Record: {matchData.opponentRecord}
              </span>
            </div>
          </div>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {matchData.scoutSummary}
          </p>
        </div>
      </section>

      {/* Recent Results Form Guide */}
      <section id="recent-results-card" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Opponent Form Guide</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Last 6 Matches
              </span>
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Reviewing Vanguard FC's recent match results, scoring patterns, and tactical lapses.
            </p>
          </div>

          {/* Form Badges row */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {recentResults.slice(0, 5).map((m) => (
              <span
                key={m.id}
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-white ${
                  m.result === 'W'
                    ? 'bg-emerald-600'
                    : m.result === 'D'
                    ? 'bg-amber-500'
                    : 'bg-red-600'
                }`}
                title={`${m.result} vs ${m.opponent} (${m.score})`}
              >
                {m.result}
              </span>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recentResults.map((result) => {
            const isLoss = result.result === 'L';
            const isWin = result.result === 'W';
            const isDraw = result.result === 'D';

            return (
              <div
                key={result.id}
                className={`p-3.5 rounded-xl border transition-all ${
                  isLoss
                    ? 'bg-red-50/50 border-red-200'
                    : isWin
                    ? 'bg-emerald-50/30 border-emerald-200'
                    : 'bg-amber-50/30 border-amber-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-extrabold text-xs text-white ${
                        isLoss ? 'bg-red-600' : isWin ? 'bg-emerald-600' : 'bg-amber-500'
                      }`}
                    >
                      {result.result}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      vs {result.opponent}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({result.venue})
                    </span>
                  </div>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    {result.score}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{result.competition}</span>
                  <span>{result.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 bg-white/80 p-2 rounded-lg border border-slate-200/70 font-medium">
                  <span className="font-bold text-slate-900">Scout Note: </span>
                  {result.tacticalNote}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Fictional Performance Statistics (Capped at maximum of 10 rows) */}
      <section id="performance-statistics-card" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Opponent Performance Statistics
              </h3>
              <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded-full border border-red-200">
                {vulnerabilityCount} Vulnerabilities Flagged
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-0.5">
              Key tactical league metrics for Vanguard FC (top {displayedStats.length} statistical rows logged).
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Table / Card List */}
        <div className="space-y-2.5">
          {displayedStats.map((stat, idx) => {
            const isVulnerable = stat.status === 'Vulnerability';
            const isStrength = stat.status === 'Strength';

            return (
              <div
                key={stat.id}
                className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                  isVulnerable
                    ? 'bg-red-50/40 border-red-200 hover:border-red-300'
                    : isStrength
                    ? 'bg-emerald-50/20 border-emerald-200/80 hover:border-emerald-300'
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-bold text-base text-slate-900">
                        {stat.metric}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                        {stat.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {stat.significance}
                    </p>
                  </div>

                  {/* Numbers & Benchmark */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 mt-1 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                    <div className="text-left sm:text-right">
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <span
                          className={`text-xl sm:text-2xl font-black ${
                            isVulnerable
                              ? 'text-red-700'
                              : isStrength
                              ? 'text-emerald-700'
                              : 'text-slate-800'
                          }`}
                        >
                          {stat.value}
                        </span>
                        {isVulnerable ? (
                          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                        ) : isStrength ? (
                          <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span>League Avg: <strong className="text-slate-700">{stat.leagueAverage}</strong></span>
                        <span>•</span>
                        <span
                          className={`font-semibold ${
                            isVulnerable ? 'text-red-700 font-bold' : 'text-slate-600'
                          }`}
                        >
                          {stat.rankInLeague}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border block text-center ${
                          isVulnerable
                            ? 'bg-red-100 text-red-800 border-red-300'
                            : isStrength
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        {stat.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout to Screen 2 */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-xl">
          <div>
            <h4 className="font-extrabold text-base sm:text-lg text-white">
              Ready to examine the tactical evidence?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Review Vanguard FC's three biggest vulnerabilities ranked by tactical priority.
            </p>
          </div>
          <button
            id="btn-goto-weaknesses"
            onClick={() => onNavigate('weaknesses')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 min-h-[46px]"
          >
            <span>Inspect 3 Weaknesses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
