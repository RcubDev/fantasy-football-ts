export interface AllWeeks {
    Weeks?: (WeeksEntity)[] | null;
  }
  export interface WeeksEntity {
    LeagueId: number;
    Week: number;
    Data: Data;
  }
  export interface Data {
    WeekNum: number;
    Matchups?: (MatchupsEntity | null)[] | null;
  }
  export interface MatchupsEntity {
    IsConsolation: string;
    IsMatchupRecapAvailable: number;
    IsPlayoffs: string;
    IsTied: number;
    MatchupGrades?: (MatchupGradesEntity)[] | null;
    MatchupRecapTitle?: null;
    MatchupRecapUrl?: string | null;
    Status: string;
    Teams?: (TeamsEntity)[] | null;
    Week: number;
    WeekEnd: string;
    WeekStart: string;
    WinnerTeamKey?: string | null;
  }
  export interface MatchupGradesEntity {
    Grade: string;
    TeamKey: string;
  }
  export interface TeamsEntity {
    DraftGrade: string;
    DraftRecapUrl: string;
    HasDraftGrade: number;
    LeagueScoringType: string;
    Manager: Manager;
    Name: string;
    NumberOfMoves: number;
    NumberOfTrades: number;
    RosterAdds: RosterAdds;
    TeamId: string;
    TeamKey: string;
    TeamLogo: TeamLogo;
    TeamPoints: TeamPoints;
    TeamProjectedPoints: TeamProjectedPoints;
    Url: string;
    WaiverPriority: number;
    WinProbability: number;
  }
  export interface Manager {
    Guid: string;
    ImageUrl?: string | null;
    ManagerId: string;
    Nickname: string;
  }
  export interface RosterAdds {
    CoverageType: string;
    CoverageValue: number;
    Value: number;
  }
  export interface TeamLogo {
    Size: string;
    Url: string;
  }
  export interface TeamPoints {
    CoverageType: string;
    PointsScored: number;
    Week: number;
  }
  export interface TeamProjectedPoints {
    CoverageType: string;
    ProjectedPointsScored: number;
    Week: number;
  }
  