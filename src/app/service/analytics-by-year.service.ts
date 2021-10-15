import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearService {

  constructor(private http: HttpClient) { }

  private analyticsByYearURL = 'http://localhost:8080/analytics/year';

  private analyticsByMonthURL = 'http://localhost:8080/analytics/';


  getAllAnalyticsByYear(): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
    return this.http.get<AnalyticsResponse>(this.analyticsByYearURL, {
      headers
    });
  }

  getAllAnalyticsByMonth(year: string): Observable<AnalyticsResponse> {
    let headers = this.getHeaders();
     
    let url: string= this.analyticsByMonthURL+year;
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
