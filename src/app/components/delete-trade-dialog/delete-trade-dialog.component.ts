import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/dialog-data.interface';
import { TradeService } from 'src/app/service/trade.service';


@Component({
  selector: 'app-delete-trade-dialog',
  templateUrl: './delete-trade-dialog.component.html',
  styleUrls: ['./delete-trade-dialog.component.scss']
})
export class DeleteTradeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteTradeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private tradeService: TradeService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    const id= this.data.id;
    this.tradeService.deleteTrade(id).subscribe();
    this.dialogRef.close();
  }

}
