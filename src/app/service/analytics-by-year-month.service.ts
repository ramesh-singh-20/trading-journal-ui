import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearMonthService {

  constructor(private http: HttpClient) { }

  private analyticsByYearAndMonth = 'http://localhost:8080/analytics';
  private allAnalyticsByShortLongURL = 'http://localhost:8080/analytics/short-long';
  private allAnalyticsByTradeTypeURL = 'http://localhost:8080/analytics/trade-type';
  private allAnalyticsByChartPatternURL = 'http://localhost:8080/analytics/chart-pattern';

  getAllAnalytics(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.analyticsByYearAndMonth, {
      headers
    });
  }

  getAllAnalyticsByShortLong(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.allAnalyticsByShortLongURL, {
      headers
    });
  }

  getAllAnalyticsByTradeType(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.allAnalyticsByTradeTypeURL, {
      headers
    });
  }

  getAllAnalyticsByChartPattern(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.allAnalyticsByChartPatternURL, {
      headers
    });
  }
}
