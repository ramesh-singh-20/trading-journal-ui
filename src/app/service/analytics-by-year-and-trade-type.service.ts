import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearAndTradeTypeService {

  constructor(private http: HttpClient) { }

  private analyticsByYearAndTradeTypeURL = 'http://localhost:8080/analytics/trade-type/year/';
  private distinctTradeTypeURL= 'http://localhost:8080/analytics/distinct/trade-type';
  private analyticsByMonthAndTradeTypeURL = 'http://localhost:8080/analytics/trade-type/';


  getAllAnalyticsByYearAndTradeType(tradeType: string): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
      let url: string= this.analyticsByYearAndTradeTypeURL+tradeType;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getTradeTypeValues(): Observable<String[]> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<String[]>(this.distinctTradeTypeURL, {
      headers
    });
  }

  getAllAnalyticsByMonthAndTradeType(tradeType: string, year: string): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
      let url: string= this.analyticsByYearAndTradeTypeURL+tradeType+'/'+year;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }
}
