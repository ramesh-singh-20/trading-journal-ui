import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics';
import { AllAnalyticsService } from 'src/app/service/all-analytics.service';

@Component({
  selector: 'app-all-analytics',
  templateUrl: './all-analytics.component.html',
  styleUrls: ['./all-analytics.component.scss']
})
export class AllAnalyticsComponent implements OnInit {

  constructor(private analyticsService: AllAnalyticsService) { 
    this.getAllAnalytics();
  }

  ngOnInit(): void {
  }

  hasResults: boolean= false;

  allAnalytics: Analytics[]= [];

  displayedColumns: string[] = ['Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
  dataSource = this.allAnalytics;

  getAllAnalytics(): void {
    this.analyticsService.getAllAnalytics()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
              console.log("Response: "+response.data.averageGain)
              this.allAnalytics.push(response.data);
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }
}
