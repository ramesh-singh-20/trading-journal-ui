import { Injectable } from '@angular/core';
import { Analytics } from '../model/analytics';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllAnalyticsService {

  constructor() { }

  analyticsResponse: Analytics[]= [{
    noOfTrades: 37,
    wins: 27,
    losses: 10,
    battingAverage: 72.97,
    averageGain: 9.34,
    averageLoss: 4.63,
    winLossRatio: 2.02,
    largestGain: 22.76,
    largestLoss: 10.0,
    netAverage: 4.71,
    percentWin: 72.97,
    percentLoss: 27.03,
    adjustedWinLossRatio: 5.45,
    avgDaysGainsHeld: 7.93,
    avgDaysLossesHeld: 11.6

}];

getAllAnalytics(): Observable<Analytics[]> {
  return of(this.analyticsResponse);
}
}
