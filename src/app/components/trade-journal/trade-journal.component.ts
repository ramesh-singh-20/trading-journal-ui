import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Trade } from 'src/app/model/trade.interface';
import { TradeDatasourceService } from 'src/app/service/trade-datasource.service';
import { TradeService } from 'src/app/service/trade.service';

@Component({
  selector: 'app-trade-journal',
  templateUrl: './trade-journal.component.html',
  styleUrls: ['./trade-journal.component.scss']
})
export class TradeJournalComponent implements OnInit, AfterViewInit {

  constructor(private tradeService: TradeService,
    private cdref: ChangeDetectorRef) { }

  displayedColumns: string[]= [
    'ID',
    'Stock',
    'Entry Price',
    'Entry Date',
    'Exit Price',
    'Exit Date',
    'Profitable',
    'Trade Type',
    'Trade Direction',
    'Chart Pattern',
    'Comments After Buy',
    'Comments After Sell'
  ]

  ngOnInit(): void {
  }

  tradesDataSource: TradeDatasourceService;

  @ViewChild(MatPaginator, {static: false})
  paginator: MatPaginator;

  @ViewChild(MatTable, {static: false})
  datatable: MatTable<Trade[]>;

  ngAfterViewInit(): void {
    this.tradesDataSource= new TradeDatasourceService(this.tradeService);
    this.tradesDataSource.setPaginator(this.paginator);
    this.cdref.detectChanges();

    this.tradesDataSource.loadTrades(
      this.tradesDataSource.getPaginator().pageIndex,
      this.tradesDataSource.getPaginator().pageSize
    );
    
    this.paginator.page.subscribe(() => {
      this.tradesDataSource.loadTrades(
        this.tradesDataSource.getPaginator().pageIndex,
        this.tradesDataSource.getPaginator().pageSize
      );
    });
  }

}
