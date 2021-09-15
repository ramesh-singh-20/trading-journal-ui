import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics.interface';
import { AnalyticsByYearService } from 'src/app/service/analytics-by-year.service';

@Component({
  selector: 'app-analytics-by-year',
  templateUrl: './analytics-by-year.component.html',
  styleUrls: ['./analytics-by-year.component.scss']
})
export class AnalyticsByYearComponent implements OnInit {

  constructor(private analyticsByYearService: AnalyticsByYearService) { }

  ngOnInit(): void {
    this.getAllAnalyticsByYear();
  }

  yearString: string= '';


  hasResults: boolean= false;
  hasMonthResults: boolean= false;


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  allAnalyticsByYearDataSource :Analytics[]= [];

  displayedMonthColumns: string[] = ['Month', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];

  displayedAnalyticsByMonthDataSource: Analytics[]= [];


  getAllAnalyticsByYear(): void {
    this.analyticsByYearService.getAllAnalyticsByYear()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.allAnalyticsByYearDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }

  getAllAnalyticsByMonth(year: string): void {
    this.yearString= year;
    this.analyticsByYearService.getAllAnalyticsByMonth(year)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasMonthResults= true;
             this.displayedAnalyticsByMonthDataSource= response.data;
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
