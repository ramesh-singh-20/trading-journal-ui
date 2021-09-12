import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from '../model/analytics-response';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsByYearService {

  constructor(private http: HttpClient) { }

  private analyticsByYearURL = 'http://localhost:8080/analytics/year';


  getAllAnalyticsByYear(): Observable<AnalyticsResponse> {
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<AnalyticsResponse>(this.analyticsByYearURL, {
      headers
    });
  }
}
