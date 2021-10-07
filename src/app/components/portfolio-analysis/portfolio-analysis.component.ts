import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Portfolio } from 'src/app/model/portfolio.interface';
import { PortfolioService } from 'src/app/service/portfolio.service';
Chart.register(...registerables);

@Component({
  selector: 'app-portfolio-analysis',
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.scss']
})
export class PortfolioAnalysisComponent implements OnInit {
  constructor(private portfolioService: PortfolioService) { }

  assetChart: any;
  returnChart: any;

  ngOnInit(): void {
    let portfolioDetails: Portfolio[];
    this.portfolioService.getPortfolioDetails().subscribe(
      response => {
        if(response.data!= null){
          portfolioDetails= response.data;
          let dates= portfolioDetails.map(a=> a.date);
          let assests= portfolioDetails.map(a => a.assetValue);
          let returns= portfolioDetails.map(a => a.cumulativeReturn);

          this.assetChart= new Chart("assetValue", {
            type: 'bar',
            data: {
              labels: dates,
              datasets: [{
                label: 'Net Asset Value',
                data: assests,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                barThickness: 3
      
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
          this.returnChart= 
          new Chart("cumulativeReturn", {
            type: 'line',
            data: {
              labels: dates,
              datasets: [{
                label: 'Cumulative Return',
                data: returns,
                backgroundColor: 'green',
                borderWidth: 3,
      
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      }
    )
  }

}
