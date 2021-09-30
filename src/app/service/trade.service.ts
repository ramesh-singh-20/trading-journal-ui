import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTradeResponse } from '../model/add-trade-response.interface';
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


  addTrade(tradeData: Trade): Observable<AddTradeResponse> {
    return this.http.post<AddTradeResponse>(this.tradeURL, tradeData, {
      headers: this.getHeaders()
    });
  }

  deleteTrade(id: number): Observable<AddTradeResponse> {
    let url: string= this.tradeURL+"/"+id;
    return this.http.delete<AddTradeResponse>(url,  {
      headers: this.getHeaders()
    });
  }

  editTrade(tradeData: Trade): Observable<AddTradeResponse> {
    return this.http.put<AddTradeResponse>(this.tradeURL, tradeData, {
      headers: this.getHeaders()
    });
  }
}
