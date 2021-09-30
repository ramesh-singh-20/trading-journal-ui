import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trade } from 'src/app/model/trade.interface';
import { TradeService } from 'src/app/service/trade.service';
import { DateValidator } from 'src/app/util/validators/date.validator';

@Component({
  selector: 'app-edit-trade-dialog',
  templateUrl: './edit-trade-dialog.component.html',
  styleUrls: ['./edit-trade-dialog.component.scss']
})
export class EditTradeDialogComponent implements OnInit {

  editTradeFormGroup: any;
  priceRegex = /^-?\d*[.,]?\d{0,2}$/;

  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<EditTradeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Trade,
              public tradeService: TradeService) { 
                this.editTradeFormGroup= this.generateEditTradeFormGroup();
              }

  ngOnInit(): void {
  }

  generateEditTradeFormGroup(): FormGroup {
    return this.fb.group (
      {
        stock: [this.data.stock, Validators.required],
        entryPrice: [this.data.entryPrice, [Validators.required, Validators.pattern(this.priceRegex)]],
        entryDate: [this.data.entryDate, Validators.compose([Validators.required, DateValidator.dateVaidator])],
        tradeType: [this.data.tradeType, Validators.required],
        shortLong: [this.data.shortLong, Validators.required],
        chartPattern: [this.data.chartPattern, Validators.required],
        exitPrice: [this.data.exitPrice, [Validators.pattern(this.priceRegex)]],
        exitDate: [this.data.exitDate, Validators.compose([DateValidator.dateVaidator])],
        commentsAfterBuy: [this.data.commentsAfterBuy],
        commentsAfterSell: [this.data.commentsAfterSell] 
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get stock(): AbstractControl {
    return this.editTradeFormGroup.get('stock');
  }

  get entryPrice(): AbstractControl {
    return this.editTradeFormGroup.get('entryPrice');
  }

  get entryDate(): AbstractControl {
    return this.editTradeFormGroup.get('entryDate');
  }

  get tradeType(): AbstractControl {
    return this.editTradeFormGroup.get('tradeType');
  }

  get shortLong(): AbstractControl {
    return this.editTradeFormGroup.get('shortLong');
  }

  get chartPattern(): AbstractControl {
    return this.editTradeFormGroup.get('chartPattern');
  }

  get exitPrice(): AbstractControl {
    return this.editTradeFormGroup.get('exitPrice');
  }

  get exitDate(): AbstractControl {
    return this.editTradeFormGroup.get('exitDate');
  }

  get commentsAfterBuy(): AbstractControl {
    return this.editTradeFormGroup.get('commentsAfterBuy');
  }

  get commentsAfterSell(): AbstractControl {
    return this.editTradeFormGroup.get('commentsAfterSell');
  }

}
