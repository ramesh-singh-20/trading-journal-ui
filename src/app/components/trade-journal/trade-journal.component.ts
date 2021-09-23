import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private tradeService: TradeService) { }

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
    this.paginator.page.subscribe(() => {
      this.tradesDataSource.loadTrades(
        this.tradesDataSource.getPaginator().pageIndex,
        this.tradesDataSource.getPaginator().pageSize
      );
    });
  }

}
