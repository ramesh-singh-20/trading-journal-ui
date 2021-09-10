import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics';
import { AllAnalyticsService } from 'src/app/service/all-analytics.service';

@Component({
  selector: 'app-all-analytics',
  templateUrl: './all-analytics.component.html',
  styleUrls: ['./all-analytics.component.scss']
})
export class AllAnalyticsComponent implements OnInit {

  constructor(private analyticsService: AllAnalyticsService) { }

  ngOnInit(): void {
  }

  allAnalytics: Analytics[]= [];

  displayedColumns: string[] = ['Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
  dataSource = this.analyticsService.getAllAnalytics();

  getAllAnalytics(): void {
    this.analyticsService.getAllAnalytics()
        .subscribe(allAnalytics => this.allAnalytics = allAnalytics);
  }
}
