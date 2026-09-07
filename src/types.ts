export type ScreenId = 'overview' | 'weaknesses' | 'preparation';

export interface RecentResult {
  id: string;
  opponent: string;
  venue: 'Home' | 'Away';
  date: string;
  score: string;
  result: 'W' | 'D' | 'L';
  competition: string;
  tacticalNote: string;
}

export interface PerformanceStat {
  id: string;
  category: 'Defense' | 'Transition' | 'Attacking' | 'Discipline & Set Pieces';
  metric: string;
  value: string;
  leagueAverage: string;
  rankInLeague: string;
  status: 'Vulnerability' | 'Average' | 'Strength';
  significance: string;
}

export interface WeaknessSupportingStat {
  label: string;
  value: string;
  context: string;
}

export interface Weakness {
  id: string;
  rank: 1 | 2 | 3;
  title: string;
  subtitle: string;
  severity: 'Critical' | 'High' | 'Significant';
  phaseOfPlay: string;
  summaryExplanation: string;
  detailedAnalysis: string;
  tacticalRootCause: string;
  pitchArea: string;
  supportingStats: WeaknessSupportingStat[];
  observationNotes: string[];
}

export interface DrillDetail {
  name: string;
  duration: string;
  setup: string;
  rules: string;
  coachingTriggers: string[];
}

export interface MatchPreparationPriority {
  id: string;
  rank: 1 | 2 | 3;
  linkedWeaknessTitle: string;
  priorityTitle: string;
  objective: string;
  tacticalFocus: {
    inPossession: string;
    outOfPossession: string;
    transitionMoment: string;
    keyPlayerRoles: string[];
    pitchTrigger: string;
  };
  trainingFocus: {
    sessionDay: string;
    drillName: string;
    drillType: string;
    pitchDimensions: string;
    playerStructure: string;
    drillDetails: DrillDetail;
    coachingPoints: string[];
  };
}

export interface UpcomingMatch {
  opponentName: string;
  opponentBadgeLetters: string;
  opponentPrimaryColor: string;
  homeTeamName: string;
  homeTeamBadgeLetters: string;
  matchDate: string;
  kickoffTime: string;
  venue: string;
  competition: string;
  matchweek: string;
  referee: string;
  opponentFormation: string;
  opponentManager: string;
  opponentRecord: string;
  opponentPosition: string;
  scoutSummary: string;
}
