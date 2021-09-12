import { Component, OnInit } from '@angular/core';
import { Analytics } from 'src/app/model/analytics';
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


  hasResults: boolean= false;


  displayedColumns: string[] = ['Year', 'Total Trades', 'Wins', 'Losses', 'Batting Average', 'Average Gain', 'Average Loss', 
                                'Win Loss Ratio', 'Largest Gain', 'Largest Loss', 'Net Average',
                                'Percent Win', 'Percent Loss', 'Adjusted Win Loss Ratio',
                                'Avg Days Gains Held', 'Avg Days Losses Held'];
                                
  allAnalyticsByYearDataSource :Analytics[]= [];


  getAllAnalyticsByYear(): void {
    this.analyticsByYearService.getAllAnalyticsByYear()
        .subscribe(
          response => {
            if(response.data!== null){
              this.hasResults= true;
             this.allAnalyticsByYearDataSource= response.data;
             console.log(this.allAnalyticsByYearDataSource.length)
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
