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
  private analyticsByMonthAndShortLongURL = 'http://localhost:8080/analytics/short-long/';


  getAllAnalyticsByYearAndShortLong(shortLong: string): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
      let url: string= this.analyticsByYearAndShortLongURL+shortLong;
    return this.http.get<AnalyticsResponse>(url, {
      headers
    });
  }

  getShortLongValues(): Observable<String[]> {
    let headers = this.getHeaders();
    return this.http.get<String[]>(this.distinctShortLongURL, {
      headers
    });
  }

  getAllAnalyticsByMonthAndShortLong(shortLong: string, year: string): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
      let url: string= this.analyticsByMonthAndShortLongURL+shortLong+'/'+year;
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
