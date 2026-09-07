import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import {
  upcomingMatchData,
  recentResultsData,
  performanceStatsData,
  opponentWeaknesses,
  matchPreparationPriorities,
} from './data/scoutData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MatchOverviewScreen } from './components/MatchOverviewScreen';
import { WeaknessAnalysisScreen } from './components/WeaknessAnalysisScreen';
import { MatchPreparationScreen } from './components/MatchPreparationScreen';
import { Activity, ShieldAlert, Target, Shield, BookOpen } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('overview');
  const [selectedPrepRank, setSelectedPrepRank] = useState<1 | 2 | 3>(1);

  // Scroll to top whenever screen switches for comfortable phone reading
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleSelectPriorityForPrep = (rank: 1 | 2 | 3) => {
    setSelectedPrepRank(rank);
  };

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white pb-16 sm:pb-8">
      {/* Top Application Header */}
      <Header matchData={upcomingMatchData} />

      {/* Screen Navigation Tabs (Without Page Reload) */}
      <Navigation
        currentScreen={currentScreen}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3.5 sm:px-6 pt-5">
        {currentScreen === 'overview' && (
          <MatchOverviewScreen
            matchData={upcomingMatchData}
            recentResults={recentResultsData}
            performanceStats={performanceStatsData}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        )}

        {currentScreen === 'weaknesses' && (
          <WeaknessAnalysisScreen
            weaknesses={opponentWeaknesses}
            onNavigate={(screen) => setCurrentScreen(screen)}
            onSelectPriorityForPrep={handleSelectPriorityForPrep}
          />
        )}

        {currentScreen === 'preparation' && (
          <MatchPreparationScreen
            priorities={matchPreparationPriorities}
            selectedRank={selectedPrepRank}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        )}
      </main>

      {/* Mobile Sticky Quick-Switcher Bar (Thumb friendly on phones at arm's length) */}
      <aside aria-label="Mobile quick switcher" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setCurrentScreen('overview')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-xs font-bold transition-all min-h-[44px] ${
              currentScreen === 'overview'
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4 mb-0.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setCurrentScreen('weaknesses')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-xs font-bold transition-all min-h-[44px] ${
              currentScreen === 'weaknesses'
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4 mb-0.5" />
            <span>Weaknesses</span>
          </button>

          <button
            onClick={() => setCurrentScreen('preparation')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-xs font-bold transition-all min-h-[44px] ${
              currentScreen === 'preparation'
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Target className="w-4 h-4 mb-0.5" />
            <span>Preparation</span>
          </button>
        </div>
      </aside>

      {/* Subtle Professional Footer */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>ScoutEdge • Match Preparation System</span>
          </div>
          <p className="text-slate-400">
            Single Invented Dataset • Top {performanceStatsData.length} Metric Rows • 3 Ranked Priorities
          </p>
        </div>
      </footer>
    </div>
  );
}
