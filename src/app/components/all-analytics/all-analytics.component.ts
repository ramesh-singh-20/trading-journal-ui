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
    this.getAllAnalyticsByShortLong();
    this.getAllAnalyticsByTradeType();
    this.getAllAnalyticsByChartPattern();
  }


  hasResults: boolean= false;


  displayedColumns: string[] = ['Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
  allTradeDataSource :Analytics[]= [];


  displayedColumnsShortLong: string[] = ['Short or Long', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 
                                  'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];

  shortLongDataSource: Analytics[]= [];

  displayedColumnsTradeType: string[] = ['Trade Type', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 
                                  'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];

  tradeTypeDataSource: Analytics[]= [];

  displayedColumnsChartPattern: string[] = ['Chart Pattern', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 
                                  'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];

  chartPatternDataSource: Analytics[]= [];

  getAllAnalytics(): void {
    this.analyticsService.getAllAnalytics()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.allTradeDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }

  getAllAnalyticsByShortLong(): void {
    this.analyticsService.getAllAnalyticsByShortLong()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.shortLongDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );

  }

  getAllAnalyticsByTradeType(): void {
    this.analyticsService.getAllAnalyticsByTradeType()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.tradeTypeDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );

  }

  getAllAnalyticsByChartPattern(): void {
    this.analyticsService.getAllAnalyticsByChartPattern()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.chartPatternDataSource= response.data;
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
