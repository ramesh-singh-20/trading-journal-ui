import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trade } from '../model/trade.interface';
import { TradeService } from './trade.service';

@Injectable({
  providedIn: 'root'
})
export class TradeDatasourceService implements DataSource<Trade>{
  private tradeSubject: BehaviorSubject<Trade[]>= new BehaviorSubject<Trade[]>([]);
  private loadingSubject: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  public paginator: MatPaginator;

  constructor(private tradeService: TradeService) { }

  connect(collectionViewer: CollectionViewer): Observable<Trade[]> {
    return this.tradeSubject.asObservable();
  }

  loadTrades(page: number, pageSize: number, showLess:boolean): void {
    this.loadingSubject.next(true);
    this.tradeService.getTrades(page, pageSize).subscribe(
      response => {
        if(response.data!= null){
          this.tradeSubject.next(response.data.trades)
          this.paginator.length= response.data.totalRecords;

          if(response.data.trades!= null 
            && response.data.trades.length> 0){
              for(let i=0; i<response.data.trades.length; i++){
                var trade= response.data.trades[i];
                var buyComment= response.data.trades[i].commentsAfterBuy;
                var sellComment= response.data.trades[i].commentsAfterSell;

                if(showLess){
                if(buyComment!= null && buyComment.length> 15){
                  trade.showMore= true;
                  trade.commentsAfterBuy=buyComment.substring(0, 15);
                }
                if(sellComment!= null && sellComment.length> 15){
                  trade.showMore= true;
                  trade.commentsAfterSell=sellComment?.substring(0,15)
                }
              }else{
                trade.showMore= false;
              }
              }
          }
        }
      }
    )
  }

  setPaginator(paginator: MatPaginator): void {
    this.paginator= paginator;
  }

  getPaginator(): MatPaginator {
    return this.paginator;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.tradeSubject.complete();
    this.loadingSubject.complete();
  }
}
