import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Analytics } from 'src/app/model/analytics';
import { AllAnalyticsService } from 'src/app/service/all-analytics.service';

@Component({
  selector: 'app-all-analytics',
  templateUrl: './all-analytics.component.html',
  styleUrls: ['./all-analytics.component.scss']
})
export class AllAnalyticsComponent implements OnInit {

  constructor(private analyticsService: AllAnalyticsService) { 
    
  }


  ngOnInit(): void {
    this.getAllAnalytics();
  }


  hasResults: boolean= false;


  displayedColumns: string[] = ['Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
  dataSource :Analytics[];

  getAllAnalytics(): void {
    this.analyticsService.getAllAnalytics()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.dataSource= response.data;
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
