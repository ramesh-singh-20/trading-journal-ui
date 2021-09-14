import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearAndChartTypeService {

  constructor(private http: HttpClient) { }

  private analyticsByYearAndChartPatternURL = 'http://localhost:8080/analytics/chart-pattern/year/';
  private distinctChartPatternURL= 'http://localhost:8080/analytics/distinct/chart-pattern';


  getAllAnalyticsByYearAndChartPattern(chartPattern: string): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
      let url: string= this.analyticsByYearAndChartPatternURL+chartPattern;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getChartPatternValues(): Observable<String[]> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<String[]>(this.distinctChartPatternURL, {
      headers
    });
  }
}
