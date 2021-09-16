import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics.interface';
import { AnalyticsByYearAndTradeTypeService } from 'src/app/service/analytics-by-year-and-trade-type.service';

@Component({
  selector: 'app-analytics-by-year-and-trade-type',
  templateUrl: './analytics-by-year-and-trade-type.component.html',
  styleUrls: ['./analytics-by-year-and-trade-type.component.scss']
})
export class AnalyticsByYearAndTradeTypeComponent implements OnInit {

  constructor(private analyticsByYearAndTradeType: AnalyticsByYearAndTradeTypeService) { }

  ngOnInit(): void {
    this.getTradeTypeValues();
  }
  
yearString: string= '';
tradeTypeString: string= '';

  hasResults: boolean= false;
  hasMonthResults: boolean= false;

  tradeTypeValues:String[]= [];


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByYearAndTradeTypeDataSource :Analytics[]= [];

  displayedMonthColumns: string[] = ['Month', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  analyticsByMonthAndTradeTypeDataSource :Analytics[]= [];


  getAllAnalyticsByYearAndTradeType(tradeType: string): void {
    this.hasMonthResults= false;
    this.tradeTypeString= tradeType;
    this.analyticsByYearAndTradeType.getAllAnalyticsByYearAndTradeType(tradeType)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.analyticsByYearAndTradeTypeDataSource= response.data;
            }else{
              console.log("Error.");
            }
          },
          error =>{
            console.log("Error: "+error);
          }
        );
  }

  getTradeTypeValues(){
    this.analyticsByYearAndTradeType.getTradeTypeValues()
         .subscribe(
           response => {
             this.tradeTypeValues= response;
           }
         )
  }

  getAllAnalyticsByMonthAndTradeType(year: string): void {
    this.yearString= year;
    this.analyticsByYearAndTradeType.getAllAnalyticsByMonthAndTradeType(this.tradeTypeString, year)
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasMonthResults= true;
             this.analyticsByMonthAndTradeTypeDataSource= response.data;
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
