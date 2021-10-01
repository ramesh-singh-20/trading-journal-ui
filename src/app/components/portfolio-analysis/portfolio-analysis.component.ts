import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-portfolio-analysis',
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.scss']
})
export class PortfolioAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("assetValue", {
      type: 'bar',
      data: {
        labels: ['10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021'],
        datasets: [{
          label: 'Net Asset Value',
          data: [20000, 25000, 30000, 28000, 25000, 29000, 32000,
            20000, 25000, 30000, 28000, 25000, 29000, 32000,
            20000, 25000, 30000, 28000, 25000, 29000, 32000,
            20000, 25000, 30000, 28000, 25000, 29000, 32000],
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

    var myChart1 = new Chart("cumulativeReturn", {
      type: 'line',
      data: {
        labels: ['10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021',
          '10/01/21', '10/11/21', '10/31/21', '11/10/21', '11/20/21', '11/30/21', '12/10/2021'],
        datasets: [{
          label: 'Cumulative Return',
          data: [60, 55, 58, 72, 85, 83, 79,
            82, 86, 92, 95, 98, 93, 94,
            97, 101, 105, 104, 107, 110, 115,
            111, 106, 108, 109, 116, 121, 120],
          backgroundColor: 'green',
          borderWidth: 1,

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
