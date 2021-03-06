import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Trade } from 'src/app/model/trade.interface';
import { TradeDatasourceService } from 'src/app/service/trade-datasource.service';
import { TradeService } from 'src/app/service/trade.service';
import { AddTradeDialogComponent } from '../add-trade-dialog/add-trade-dialog.component';
import { CheckCommentsDialogComponent } from '../check-comments-dialog/check-comments-dialog.component';
import { DeleteTradeDialogComponent } from '../delete-trade-dialog/delete-trade-dialog.component';

@Component({
  selector: 'app-trade-journal',
  templateUrl: './trade-journal.component.html',
  styleUrls: ['./trade-journal.component.scss']
})
export class TradeJournalComponent implements OnInit, AfterViewInit {

  constructor(private tradeService: TradeService,
              private cdref: ChangeDetectorRef,
              public dialog: MatDialog) { }

  displayedColumns: string[]= [
    'Stock',
    'Entry Price',
    'Entry Date',
    'Stop Loss',
    'Amount Risked',
    'Risk Per Position',
    'Risk Per Portfolio',
    'Exit Price',
    'Exit Date',
    'Profitable',
    'Trade Type',
    'Trade Direction',
    'Chart Pattern',
    'Comments After Buy',
    'Comments After Sell',
    'Actions'
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
      this.tradesDataSource.getPaginator().pageSize,
      this.showLess
    );
    
    this.paginator.page.subscribe(() => {
      this.tradesDataSource.loadTrades(
        this.tradesDataSource.getPaginator().pageIndex,
        this.tradesDataSource.getPaginator().pageSize,
        this.showLess
        
      );
    });
  }

  showLess: boolean = true;


  showMoreButtonClicked(): void {
    if(this.showLess){
      this.showLess= false;
    }else{
      this.showLess= true;
    }
    
    this.retrieveTrades(this.showLess)
  }

  addTrade(): void {
    const dialogRef= this.dialog.open(AddTradeDialogComponent, {
      ariaLabel: 'Add Trade'
    });
    dialogRef.afterClosed().subscribe(() => this.retrieveTrades(true));
  }

  updateTrade(element: any): void {
    console.log("Id: "+element.id);
    console.log("Shares: "+element.noOfShares);
    const dialogRef= this.dialog.open(CheckCommentsDialogComponent, {
      data: element,
      ariaLabel: 'Edit Trade'
    });
    dialogRef.afterClosed().subscribe(() => this.retrieveTrades(true));
  }

  deleteTrade(id: number): void {
    const dialogRef= this.dialog.open(DeleteTradeDialogComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(() => this.retrieveTrades(true));

  }

  retrieveTrades(showLess: boolean): void {
    this.tradesDataSource.loadTrades(
      0,
      10,
      showLess
    );
  }
}
