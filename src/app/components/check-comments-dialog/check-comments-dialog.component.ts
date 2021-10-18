import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trade } from 'src/app/model/trade.interface';
import { EditTradeDialogComponent } from '../edit-trade-dialog/edit-trade-dialog.component';

@Component({
  selector: 'app-check-comments-dialog',
  templateUrl: './check-comments-dialog.component.html',
  styleUrls: ['./check-comments-dialog.component.scss']
})
export class CheckCommentsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckCommentsDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Trade) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialog.open(EditTradeDialogComponent, {
      data: this.data,
      ariaLabel: 'Buy/Sell Comments Expanded.'
    });
    this.dialogRef.close();
  }

}
