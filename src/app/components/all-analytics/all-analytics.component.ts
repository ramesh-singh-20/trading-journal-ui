import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics';

@Component({
  selector: 'app-all-analytics',
  templateUrl: './all-analytics.component.html',
  styleUrls: ['./all-analytics.component.scss']
})
export class AllAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  displayedColumns: string[] = ['Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
  dataSource = this.analyticsResponse;
}
