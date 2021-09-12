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

  }


  hasResults: boolean= false;

  shortLongValues: ShortLong[] =[
    {value: 'SHORT', viewValue: 'Short'},
    {value: 'LONG', viewValue: 'Long'}
  ];


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByYearAndShortLongDataSource :Analytics[]= [];


  getAllAnalyticsByYearAndShortLong(shortLong: string): void {
    this.analyticsByYearAndShortLong.getAllAnalyticsByYearAndShortLong(shortLong)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.analyticsByYearAndShortLongDataSource= response.data;
             console.log(this.analyticsByYearAndShortLongDataSource.length)
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
