import { yahooGameIds } from '../Data/YahooData/YahooGameIds';
import  leagues from '../Data/LeaguesData';
import { ensure } from './TypeScriptHelpers';
import _ from 'lodash';
import { LeagueDataModel } from '../Models/LeagueData';

export function GetYahooLeagueKeyIdentifier(yahooGameId: string, leagueId: string) {
    return `${yahooGameId}.l.${leagueId}`;
}

export function GetYahooGameKeyFromSeasonYear(year: number): string {
    return ensure(yahooGameIds.find(x => x.year === year)).key;
}

export function GetYahooLeagueIdFromYear(year: number): string {
    return ensure(leagues.find(x => x.year === year)).yahooLeagueId;
}

export function GetLeagueIdsFromInteralLeagueId(internalLeagueId: number): LeagueDataModel[] {
    return leagues.filter(x => x.internalId === internalLeagueId);
}