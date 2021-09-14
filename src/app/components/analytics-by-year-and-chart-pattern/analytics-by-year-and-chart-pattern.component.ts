import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics.interface';
import { AnalyticsByYearAndChartTypeService } from 'src/app/service/analytics-by-year-and-chart-type.service';

@Component({
  selector: 'app-analytics-by-year-and-chart-pattern',
  templateUrl: './analytics-by-year-and-chart-pattern.component.html',
  styleUrls: ['./analytics-by-year-and-chart-pattern.component.scss']
})
export class AnalyticsByYearAndChartPatternComponent implements OnInit {

  constructor(private analyticsByYearAndChartPattern: AnalyticsByYearAndChartTypeService) { }

  ngOnInit(): void {
    this.getChartPatternValues();
  }
  


  hasResults: boolean= false;

  chartPatternValues:String[]= [];


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByYearAndChartPatternDataSource :Analytics[]= [];


  getAllAnalyticsByYearAndChartPattern(chartPattern: string): void {
    this.analyticsByYearAndChartPattern.getAllAnalyticsByYearAndChartPattern(chartPattern)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.analyticsByYearAndChartPatternDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }

  getChartPatternValues(){
    this.analyticsByYearAndChartPattern.getChartPatternValues()
         .subscribe(
           response => {
             this.chartPatternValues= response;
           }
         )
  }

}
