import { Injectable } from '@angular/core';
import { Analytics } from '../model/analytics.interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AllAnalyticsService {

  constructor(private http: HttpClient) { }

  private allAnalyticsURL = 'http://localhost:8080/analytics';
  private allAnalyticsByShortLongURL = 'http://localhost:8080/analytics/short-long';
  private allAnalyticsByTradeTypeURL = 'http://localhost:8080/analytics/trade-type';
  private allAnalyticsByChartPatternURL = 'http://localhost:8080/analytics/chart-pattern';

  getAllAnalytics(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.allAnalyticsURL, {
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
