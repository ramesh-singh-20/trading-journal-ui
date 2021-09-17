import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics.interface';
import { AnalyticsByYearAndShortLongService } from 'src/app/service/analytics-by-year-and-short-long.service';
import {ShortLong} from 'src/app/model/short-long.interface';

@Component({
  selector: 'app-analytics-by-year-and-short-long',
  templateUrl: './analytics-by-year-and-short-long.component.html',
  styleUrls: ['./analytics-by-year-and-short-long.component.scss']
})
export class AnalyticsByYearAndShortLongComponent implements OnInit {

  constructor(private analyticsByYearAndShortLong: AnalyticsByYearAndShortLongService) { }

  ngOnInit(): void {
    this.getShortLongValues();
  }

  yearString: string= '';
  shortLongString: string= '';  

  hasResults: boolean= false;
  hasMonthResults: boolean= false;

  shortLongValues:String[]= [];


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByYearAndShortLongDataSource :Analytics[]= [];

  displayedMonthColumns: string[] = ['Month', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByMonthAndShortLongDataSource :Analytics[]= [];


  getAllAnalyticsByYearAndShortLong(shortLong: string): void {
    this.hasMonthResults= false;
    this.shortLongString= shortLong;
    this.analyticsByYearAndShortLong.getAllAnalyticsByYearAndShortLong(shortLong)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.analyticsByYearAndShortLongDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }

  getShortLongValues(){
    this.analyticsByYearAndShortLong.getShortLongValues()
         .subscribe(
           response => {
             this.shortLongValues= response;
           }
         )
  }

  getAllAnalyticsByMonthAndShortLong(year: string): void {
    this.hasMonthResults= false;
    this.yearString= year;
    this.analyticsByYearAndShortLong.getAllAnalyticsByMonthAndShortLong(this.shortLongString, year)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasMonthResults= true;
             this.analyticsByMonthAndShortLongDataSource= response.data;
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
