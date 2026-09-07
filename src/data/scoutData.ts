import {
  UpcomingMatch,
  RecentResult,
  PerformanceStat,
  Weakness,
  MatchPreparationPriority,
} from '../types';

export const upcomingMatchData: UpcomingMatch = {
  opponentName: 'Vanguard FC',
  opponentBadgeLetters: 'VFC',
  opponentPrimaryColor: '#dc2626', // Crimson red
  homeTeamName: 'Crestview United',
  homeTeamBadgeLetters: 'CU',
  matchDate: 'Saturday, Oct 18, 2025',
  kickoffTime: '15:00 GMT',
  venue: 'Crestview Arena (Home)',
  competition: 'Premier Continental League',
  matchweek: 'Matchweek 24 of 38',
  referee: 'Marcus Thorne',
  opponentFormation: '4-3-3 Attacking (High Press)',
  opponentManager: 'Julian Sterling',
  opponentRecord: '13W - 4D - 6L (43 Pts)',
  opponentPosition: '4th in League Table',
  scoutSummary:
    'Vanguard FC are an aggressive, possession-dominant squad that commits fullbacks high up the pitch. While formidable in sustained final-third siege play, their hyper-aggressive defensive rest-defense creates severe exploitable spaces in defensive transition and against diagonal delivery.',
};

export const recentResultsData: RecentResult[] = [
  {
    id: 'res-1',
    opponent: 'Ironbridge Athletic',
    venue: 'Away',
    date: 'Oct 11, 2025',
    score: '1 - 2',
    result: 'L',
    competition: 'Premier Continental League',
    tacticalNote: 'Conceded both goals on counter-attacks after turnovers inside the central third.',
  },
  {
    id: 'res-2',
    opponent: 'Silverstone Rovers',
    venue: 'Home',
    date: 'Oct 04, 2025',
    score: '3 - 2',
    result: 'W',
    competition: 'Premier Continental League',
    tacticalNote: 'Dominated possession (64%) but conceded 2 goals from far-post back-door crosses.',
  },
  {
    id: 'res-3',
    opponent: 'Blackwood Town',
    venue: 'Away',
    date: 'Sep 27, 2025',
    score: '2 - 2',
    result: 'D',
    competition: 'Premier Continental League',
    tacticalNote: 'Equalized in 88th min; vulnerable when defending set piece rebounds.',
  },
  {
    id: 'res-4',
    opponent: 'Oakhaven Celtic',
    venue: 'Home',
    date: 'Sep 20, 2025',
    score: '4 - 1',
    result: 'W',
    competition: 'Premier Continental League',
    tacticalNote: 'High press overwhelmed a passive backline; dominated territory.',
  },
  {
    id: 'res-5',
    opponent: 'Meridian City',
    venue: 'Away',
    date: 'Sep 13, 2025',
    score: '0 - 3',
    result: 'L',
    competition: 'Continental Cup Round of 16',
    tacticalNote: 'Total collapse against direct counter-attacking wingers exploiting high defensive line.',
  },
  {
    id: 'res-6',
    opponent: 'Highland Park FC',
    venue: 'Home',
    date: 'Aug 30, 2025',
    score: '1 - 0',
    result: 'W',
    competition: 'Premier Continental League',
    tacticalNote: 'Low-block opponent; struggled to break down 5-4-1 until late penalty.',
  },
];

// Key Performance Statistics (Capped at top 10 most critical tactical metrics)
export const performanceStatsData: PerformanceStat[] = [
  {
    id: 'stat-01',
    category: 'Defense',
    metric: 'Goals Conceded per Match',
    value: '1.43',
    leagueAverage: '1.18',
    rankInLeague: '14th of 20',
    status: 'Vulnerability',
    significance: 'Higher than top-6 average; backline breached in 5 of last 6 matches',
  },
  {
    id: 'stat-02',
    category: 'Defense',
    metric: 'Defensive Line Height (Avg Meters from Goal)',
    value: '53.8m',
    leagueAverage: '45.2m',
    rankInLeague: '2nd Highest',
    status: 'Vulnerability',
    significance: 'Leaves massive 40+ meter corridor behind center backs for vertical runners',
  },
  {
    id: 'stat-03',
    category: 'Transition',
    metric: 'Counter-Attack Shots Conceded / 90',
    value: '3.6',
    leagueAverage: '1.9',
    rankInLeague: '20th of 20 (Worst)',
    status: 'Vulnerability',
    significance: 'Single-pivot midfield structure gets bypassed in 2 passes during turnover',
  },
  {
    id: 'stat-04',
    category: 'Defense',
    metric: 'Far-Post Crosses Conceded / 90',
    value: '4.8',
    leagueAverage: '2.9',
    rankInLeague: '19th of 20',
    status: 'Vulnerability',
    significance: 'Left-back frequently gets sucked central, leaving the back post unmarked',
  },
  {
    id: 'stat-05',
    category: 'Defense',
    metric: 'Aerial Duels Won in Own Penalty Box',
    value: '48.2%',
    leagueAverage: '56.4%',
    rankInLeague: '18th of 20',
    status: 'Vulnerability',
    significance: 'Struggles to command the box under contested aerial delivery',
  },
  {
    id: 'stat-06',
    category: 'Transition',
    metric: 'Turnovers in Own Defensive Third / 90',
    value: '6.9',
    leagueAverage: '4.2',
    rankInLeague: '17th of 20',
    status: 'Vulnerability',
    significance: 'Goalkeeper and #6 force high-risk ground passes into central traffic',
  },
  {
    id: 'stat-07',
    category: 'Defense',
    metric: 'Clean Sheet Percentage',
    value: '21.7%',
    leagueAverage: '31.5%',
    rankInLeague: '16th of 20',
    status: 'Vulnerability',
    significance: 'Kept only 5 clean sheets in 23 league matches this season',
  },
  {
    id: 'stat-08',
    category: 'Discipline & Set Pieces',
    metric: 'Corner Kick Defensive First-Contact %',
    value: '52.0%',
    leagueAverage: '63.5%',
    rankInLeague: '16th of 20',
    status: 'Vulnerability',
    significance: 'Zonal marking scheme creates gaps between front-post and penalty spot',
  },
  {
    id: 'stat-09',
    category: 'Attacking',
    metric: 'Average Ball Possession',
    value: '59.4%',
    leagueAverage: '50.0%',
    rankInLeague: '3rd of 20',
    status: 'Strength',
    significance: 'Patient buildup through inverted right-back and attacking 8s',
  },
  {
    id: 'stat-10',
    category: 'Attacking',
    metric: 'Goals Scored per Match',
    value: '1.91',
    leagueAverage: '1.24',
    rankInLeague: '4th of 20',
    status: 'Strength',
    significance: 'Potent front three with 34 collective goals generated',
  },
];

// The Opponent's 3 Biggest Weaknesses (Ranked 1 to 3)
export const opponentWeaknesses: Weakness[] = [
  {
    id: 'weakness-1',
    rank: 1,
    title: 'Extreme High Defensive Line with Sluggish Recovery Pace',
    subtitle: 'Exposed to direct vertical transition passes into the channels',
    severity: 'Critical',
    phaseOfPlay: 'Defensive Transition (Opponent in Rest-Defense)',
    summaryExplanation:
      'Vanguard FC push both center backs beyond the 50-meter mark to maintain aggressive pitch compression. When possession is contested or lost, their central pair lacks turn-and-sprint acceleration, surrendering a 40-meter highway behind them.',
    detailedAnalysis:
      'Both starting center backs (#4 Aris Thorne and #5 Mateo Vance) average over 188cm and are dominant in stationary aerial contests, but struggle severely on 180-degree pivot turns. Their left-back routinely overcommits into the attacking half-space, leaving the left defensive channel completely vacant. In their recent 0-3 loss to Meridian City and 1-2 loss to Ironbridge Athletic, 4 out of 5 goals conceded came directly from vertical through-balls played within 3 touches of winning the ball.',
    tacticalRootCause:
      'Systemic commitment to extreme territory compression combined with insufficient recovery speed from center backs.',
    pitchArea: 'Deep Channels Behind Center Backs (Zones 16 & 18)',
    supportingStats: [
      {
        label: 'Counter-Attack Shots Conceded',
        value: '3.6 / 90',
        context: '20th of 20 (Worst in League; League Avg: 1.9)',
      },
      {
        label: 'Average Defensive Line Height',
        value: '53.8 meters',
        context: '2nd highest in league; 8.6m higher than league benchmark',
      },
      {
        label: 'Goals Conceded via Fast Breaks',
        value: '11 Goals',
        context: '38% of their total goals conceded this season',
      },
    ],
    observationNotes: [
      'Center backs do not drop early when opponent ball-carrier has open body shape and head up.',
      'Goalkeeper sweeps aggressively but hesitates on diagonal lofted balls outside his 18-yard box.',
      'Right fullback over-covers inside, leaving our left winger 1v1 on wide counter-breakouts.',
    ],
  },
  {
    id: 'weakness-2',
    rank: 2,
    title: 'Far-Post Aerial Blindspot & Back-Door Vulnerability',
    subtitle: 'Left-back tucks in excessively; struggles with deep angled deliveries',
    severity: 'High',
    phaseOfPlay: 'Out of Possession / Defending Wide Crosses',
    summaryExplanation:
      'Vanguard FC’s defensive unit over-compacts toward the ball side inside the 18-yard box. Their left-back consistently loses visual tracking of runners arriving at the far post, resulting in uncontested back-door finishes and loose second balls.',
    detailedAnalysis:
      'When crosses originate from our right wing or right half-space, their backline drops rapidly toward the front post to defend the six-yard box. However, their left-back (#3 Diego Morales) focuses entirely on the ball and consistently loses orientation of his blindside marker. In the last 4 matches, opponents have registered 19 far-post headers or second-ball shots against them, converting 4 into goals.',
    tacticalRootCause:
      'Poor body shape and ball-watching habit by the fullback line, leaving the far third of the penalty box unguarded.',
    pitchArea: 'Back Post & Edge of Box Secondary Zone (Far-Side Box)',
    supportingStats: [
      {
        label: 'Far-Post Crosses Conceded',
        value: '4.8 / 90',
        context: '19th in league; allows free headers or second-touch volleys',
      },
      {
        label: 'Aerial Duels Won in Own Box',
        value: '48.2%',
        context: '18th of 20 teams (League Average: 56.4%)',
      },
      {
        label: 'Cross-to-Goal Concession Rate',
        value: '19.4%',
        context: 'Nearly 1 in 5 crosses into their box results in a shot on target',
      },
    ],
    observationNotes: [
      'Opponent left-back faces the crosser squarely with back completely turned to wide attackers.',
      'Defensive midfielders fail to track late runners arriving onto the D-box second ball.',
      'Crosses with backspin or deep arc cause goalkeeper to remain glued to the goal line.',
    ],
  },
  {
    id: 'weakness-3',
    rank: 3,
    title: 'Panic Turnovers Under Coordinated Central Midfield Trap',
    subtitle: 'Single pivot (#6) crumbles when forced onto weak foot with back to play',
    severity: 'Significant',
    phaseOfPlay: 'Opponent Build-Up from Deep (First & Second Phase)',
    summaryExplanation:
      'Vanguard’s build-up runs almost exclusively through their lone holding midfielder (#6 Lucas Sterling). When teams bait the initial pass into the pivot and collapse with a 2-man pincer press, he turns into danger and commits lethal giveaways inside his own half.',
    detailedAnalysis:
      'Manager Julian Sterling insists on playing ground passes out from the goalkeeper even under pressure. The lone #6 insists on receiving facing his own goal. When pressed aggressively from his blindside while our second player cuts the back-pass to the goalkeeper, Sterling consistently loses possession or plays hasty blind horizontal balls across his defensive third.',
    tacticalRootCause:
      'Over-reliance on an isolated single pivot without double-pivot structural relief in deep build-up.',
    pitchArea: 'Central Third Build-Up Zone (Zones 11 & 14)',
    supportingStats: [
      {
        label: 'Turnovers in Own Defensive Half',
        value: '6.9 / 90',
        context: '17th of 20 (League Avg: 4.2; high-danger turnovers)',
      },
      {
        label: 'Press Resistance Rating of #6',
        value: '54 / 100',
        context: 'Dispossessed on 31.8% of progressive pressures faced',
      },
      {
        label: 'Direct Shots Conceded from Build-Up Turnovers',
        value: '2.3 / 90',
        context: 'Directly yields high xG chances within 8 seconds of giveaway',
      },
    ],
    observationNotes: [
      'Pivot telegraphs body posture early; looks only to his favored right foot.',
      'Center backs split too wide, leaving no safety valve if the pivot is ambushed.',
      'Opponent bench visibly gets agitated when pressed early in the half.',
    ],
  },
];

// Match Preparation: 3 Actionable Priorities directly addressing the 3 weaknesses
export const matchPreparationPriorities: MatchPreparationPriority[] = [
  {
    id: 'prep-1',
    rank: 1,
    linkedWeaknessTitle: 'Extreme High Defensive Line with Sluggish Recovery Pace',
    priorityTitle: 'Direct Vertical Counter-Strikes Behind Opponent Fullbacks',
    objective:
      'Exploit Vanguard’s 53.8m high defensive line by releasing vertical runners into the vacant channels within 2 touches of winning possession.',
    tacticalFocus: {
      inPossession:
        'Upon winning the ball in mid-third: immediate forward pass into the wide channel. Do NOT pause or circulate sideways. Striker makes diagonal pinning run across center backs to drag coverage, while inverted winger sprints directly into the vacated half-space behind their left-back.',
      outOfPossession:
        'Maintain a compact mid-block (4-4-2 or 4-2-3-1) with defensive line held at 32 meters. Allow their center backs to have harmless sideways possession until they cross the midfield line, baiting them to push high.',
      transitionMoment:
        'Rule of 6 Seconds: Within 6 seconds of regaining possession, deliver an early aerial or driven ball into the 40-meter green zone behind their center backs.',
      keyPlayerRoles: [
        'Center Forward (#9): Make outward diagonal runs toward the right channel.',
        'Right Winger (#7): Stay wide and high on defensive shoulder, ready to sprint into depth.',
        'Central Midfielder (#8): Look up immediately on first touch; deliver driven through-ball.',
      ],
      pitchTrigger:
        'Whenever Vanguard’s left-back advances beyond our midfield line and their center backs step to halfway.',
    },
    trainingFocus: {
      sessionDay: 'Tuesday (Matchday -4) & Thursday (Matchday -2)',
      drillName: 'Rapid Breakout: 6-Second Transition Over The Top',
      drillType: 'Tactical Phase of Play (Counter-Attack Waves)',
      pitchDimensions: 'Two-thirds pitch (70m x 68m) with full goal and 2 target mini-goals',
      playerStructure: '8v7 + Goalkeeper (Our attacking transition unit vs Opponent High-Line Simulation)',
      drillDetails: {
        name: '40-Meter Channel Exploitation Wave',
        duration: '4 sets of 5 minutes (25 min total)',
        setup:
          'Opponent back-4 + #6 set up at the midfield stripe. Our team starts in mid-block shape. Coach injects ball into opponent #6, our team forces turnover and must score in full goal within 6 seconds.',
        rules:
          'Maximum 3 touches per player during transition; at least one runner must breach the 18-yard box before the ball enters.',
        coachingTriggers: [
          '“Head up on ball-win!” — First pass must travel forward if channel is open.',
          '“Curved diagonal run!” — Striker must avoid getting caught offside by checking run then exploding into depth.',
          '“Early strike!” — Take the shot inside the box without taking extra decelerating touches.',
        ],
      },
      coachingPoints: [
        'Timing of run: Do not sprint until the passer has unpressured contact on the ball.',
        'Passing weight: Drive the ball along the grass or lofted into the channel, away from their goalkeeper’s reach.',
        'Goalkeeper distribution: Our keeper must look for immediate side-volley or throw to wide wingers upon claiming crosses.',
      ],
    },
  },
  {
    id: 'prep-2',
    rank: 2,
    linkedWeaknessTitle: 'Far-Post Aerial Blindspot & Back-Door Vulnerability',
    priorityTitle: 'Far-Post Overloads & Deep Diagonal Deliveries',
    objective:
      'Attack the blindside of Vanguard’s tucked-in left-back (#3) with deep diagonal crosses from the right half-space and late arrivals from our opposite winger and attacking midfielder.',
    tacticalFocus: {
      inPossession:
        'Work the ball into our right half-space (Zone 15). Right-sided midfielder or inverted winger delivers early outswinging/inswinging deep crosses aimed between 6 to 10 yards out at the far post. Striker attacks near-post to pull center backs, leaving the far post isolated 1v1 or 2v1.',
      outOfPossession:
        'When crossing fails, maintain counter-press structure at the edge of their box (Zone 14) to win the cleared second ball and shoot on sight.',
      transitionMoment:
        'On wide set-pieces and corners: execute outswinging routines to the back third of the penalty spot where their zonal scheme has a blind spot.',
      keyPlayerRoles: [
        'Right Midfielder (#7): Deliver early deep crosses with curve behind the defensive line.',
        'Left Winger (#11): Make blindside back-door sprint behind their left-back.',
        'Attacking Midfielder (#10): Hover around the penalty arc for the knocked-down second ball.',
      ],
      pitchTrigger:
        'When opponent backline drops inside the 6-yard box and their left-back faces sideways toward the right corner flag.',
    },
    trainingFocus: {
      sessionDay: 'Wednesday (Matchday -3: Tactical Units)',
      drillName: 'Far-Post Blindside Crash & Second-Ball Lockdown',
      drillType: 'Functional Attacking Unit Drill',
      pitchDimensions: 'Half pitch (52m x 68m) with 1 regulation goal and crossing mannequins',
      playerStructure: '6 Attackers vs 4 Defenders + Goalkeeper',
      drillDetails: {
        name: 'Wide Delivery & 3-Man Box Arrival Timing',
        duration: '20 minutes (2 blocks of 8 min + coaching corrections)',
        setup:
          'Ball circulated through #8 to right wing. Three offensive runners in box: Near post (front runner), Far post (back winger), Edge of box (attacking 8).',
        rules:
          'Cross must be delivered from beyond the 18-yard box line (early cross zone); points awarded double for far-post headers or volleys.',
        coachingTriggers: [
          '“Stay out of his peripheral vision!” — Far-post runner must delay run until crosser prepares to strike.',
          '“Lock the edge of the box!” — Defensive midfielder must not enter the 6-yard box; hold the rebound zone.',
          '“Attack the ball at highest point!” — Jump off front foot across the defender.',
        ],
      },
      coachingPoints: [
        'Body angle of crosser: Open hips and target the corridor of uncertainty between goalkeeper and left-back.',
        'Attacking the second ball: 65% of crosses generate deflections; reaction speed within 2 meters determines the goal.',
      ],
    },
  },
  {
    id: 'prep-3',
    rank: 3,
    linkedWeaknessTitle: 'Panic Turnovers Under Coordinated Central Midfield Trap',
    priorityTitle: 'Coordinated Central Midfield Trap on Opponent #6',
    objective:
      'Bait Vanguard’s center backs into passing into their single pivot (#6 Lucas Sterling), then trigger an immediate 2-player pincer press to steal possession 25 meters from their goal.',
    tacticalFocus: {
      inPossession:
        'On stealing the ball in central third: immediate forward shot or quick 1-2 slip pass to our striker who peels off the shoulder of the split center back.',
      outOfPossession:
        'Striker screens one center back, allowing the other center back to pass forward into their #6. As the ball is traveling, our #10 steps aggressively to press from behind while our #8 pinches in from the blindside.',
      transitionMoment:
        'Aggressive high turnover moment: opponent team will be expanded in build-up shape (fullbacks wide and high, center backs split). One clean interception produces a direct 3v2 overload on their goal.',
      keyPlayerRoles: [
        'Attacking Midfielder (#10): Lead the pressing trap as the ball travels to their #6.',
        'Central Midfielder (#8): Cut the inside passing angle and squeeze the pocket.',
        'Striker (#9): Curved run to cut back-pass to goalkeeper or center back.',
      ],
      pitchTrigger:
        'The second their goalkeeper or center back plays a ground pass toward their #6 whose back is facing our goal.',
    },
    trainingFocus: {
      sessionDay: 'Thursday (Matchday -2) & Friday (Matchday -1 Walkthrough)',
      drillName: 'Pincer Midfield Press to Immediate 3-Second Finish',
      drillType: 'High-Intensity Pressing & Transition Game',
      pitchDimensions: '40m x 40m central grid with 1 full goal and 1 goalkeeper',
      playerStructure: '5v5 + 2 Neutral Bouncers',
      drillDetails: {
        name: 'Pivot Ambush & Vertical Strike',
        duration: '18 minutes (6 x 2-minute high-tempo rounds)',
        setup:
          'Simulated opponent squad tries to complete 4 passes including their pivot player. Our pressing unit works on synchronization.',
        rules:
          'When press succeeds on the pivot, team has 4 seconds to score in the full-size goal. 3 points for goal scored within 4 seconds.',
        coachingTriggers: [
          '“Press on the travel!” — Do not wait for the pivot to control the ball; arrive as the ball reaches his boots.',
          '“Trap from the blindside!” — Approach from his right shoulder to prevent him turning onto his strong foot.',
          '“Pincer clamp!” — Close the gap with aggressive body shape and tackle cleanly.',
        ],
      },
      coachingPoints: [
        'Do not foul: Use body leverage and intercept on touch rather than lunging into the back.',
        'First thought after turnover: Shoot immediately or slide the runner through the vacant center.',
      ],
    },
  },
];
