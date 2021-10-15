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
  private analyticsByMonthAndChartPatternURL = 'http://localhost:8080/analytics/chart-pattern/';



  getAllAnalyticsByYearAndChartPattern(chartPattern: string): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
      let url: string= this.analyticsByYearAndChartPatternURL+chartPattern;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getChartPatternValues(): Observable<String[]> {
    let headers = this.getHeaders();
    return this.http.get<String[]>(this.distinctChartPatternURL, {
      headers
    });
  }

  getAllAnalyticsByMonthAndChartPattern(chartPattern: string, year: string): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
      let url: string= this.analyticsByMonthAndChartPatternURL+chartPattern+'/'+year;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  }
}
