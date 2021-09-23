import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeResponse } from '../model/trade-response.interface';
import { Trade } from '../model/trade.interface';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }

  private tradeURL = 'http://localhost:8080/trade';

  getTrades(page: number, pageSize: number): Observable<TradeResponse> {
    const params= new HttpParams().set('page', page.toString()).set('pageSize', pageSize.toString());
      
    return this.http.get<TradeResponse>(this.tradeURL, {
      params,
      headers: this.getHeaders()
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  }


  addTrade(tradeData: Trade): void {
    this.http.post(this.tradeURL, tradeData, {
      headers: this.getHeaders()
    })
  }
}
