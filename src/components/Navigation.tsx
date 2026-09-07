import React from 'react';
import { ScreenId } from '../types';
import { Activity, ShieldAlert, Target } from 'lucide-react';

interface NavigationProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onSelectScreen,
}) => {
  const navItems = [
    {
      id: 'overview' as ScreenId,
      label: 'Match Overview',
      shortLabel: 'Overview',
      icon: Activity,
      description: 'Opponent & Form',
    },
    {
      id: 'weaknesses' as ScreenId,
      label: 'Weakness Analysis',
      shortLabel: '3 Weaknesses',
      badge: '3 Core',
      icon: ShieldAlert,
      description: 'Ranked Evidence',
    },
    {
      id: 'preparation' as ScreenId,
      label: 'Match Preparation',
      shortLabel: 'Preparation',
      icon: Target,
      description: 'Tactical & Drills',
    },
  ];

  return (
    <nav id="scoutedge-navigation" className="bg-white border-b border-slate-200 sticky top-[57px] sm:top-[65px] z-20 shadow-xs">
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-3 gap-1 py-1.5" role="tablist">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;

            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectScreen(item.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 py-2 px-2 sm:py-2.5 rounded-xl font-bold transition-all text-center min-h-[50px] relative ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${
                      isActive ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  />
                  <span className="text-sm sm:text-base tracking-tight whitespace-nowrap">
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.shortLabel}</span>
                  </span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                      isActive
                        ? 'bg-red-500 text-white'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
