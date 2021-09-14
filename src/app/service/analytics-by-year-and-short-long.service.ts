import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearAndShortLongService {

  constructor(private http: HttpClient) { }

  private analyticsByYearAndShortLongURL = 'http://localhost:8080/analytics/short-long/year/';
  private distinctShortLongURL= 'http://localhost:8080/analytics/distinct/short-long';


  getAllAnalyticsByYearAndShortLong(shortLong: string): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
      let url: string= this.analyticsByYearAndShortLongURL+shortLong;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getShortLongValues(): Observable<String[]> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<String[]>(this.distinctShortLongURL, {
      headers
    });
  }
}
