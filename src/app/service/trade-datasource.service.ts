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

  loadTrades(page: number, pageSize: number): void {
    this.loadingSubject.next(true);
    this.tradeService.getTrades(page, pageSize).subscribe(
      response => {
        if(response.data!= null){
          this.tradeSubject.next(response.data.trades)
          this.paginator.length= response.data.totalRecords;
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
