import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioResponse } from '../model/portfolio-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  private portfolioURL = 'http://localhost:8080/portfolio';

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  }

  getPortfolioDetails(): Observable<PortfolioResponse> {
      
    return this.http.get<PortfolioResponse>(this.portfolioURL, {
      headers: this.getHeaders()
    });
  }

}
