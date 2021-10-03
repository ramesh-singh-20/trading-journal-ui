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
    this.editTradeFormGroup = this.generateEditTradeFormGroup();
  }

  ngOnInit(): void {
  }

  generateEditTradeFormGroup(): FormGroup {
    return this.fb.group(
      {
        stock: [this.data.stock, Validators.required],
        entryPrice: [this.data.entryPrice, [Validators.required, Validators.pattern(this.priceRegex)]],
        entryDate: [this.data.entryDate, Validators.compose([Validators.required, DateValidator.dateVaidator])],
        stopLoss: [this.data.stopLoss, [Validators.required, Validators.pattern(this.priceRegex)]],
        amountRisked: [this.data.amountRisked, [Validators.required, Validators.pattern(this.priceRegex)]],
        riskPercentPosition: [this.data.riskPercentPosition, [Validators.required, Validators.pattern(this.priceRegex)]],
        riskPercentPortfolio: [this.data.riskPercentPortfolio, [Validators.required, Validators.pattern(this.priceRegex)]],
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

  onSubmit(): void {
    if (this.editTradeFormGroup.valid) {
      this.tradeService.editTrade(this.editTradeFormGroupToTrade()).subscribe();
      this.dialogRef.close();
    }
  }

  onReset(): void {
    this.editTradeFormGroup= this.generateEditTradeFormGroup();
  }

  editTradeFormGroupToTrade(): Trade {

    const trade: Trade = {
      id: this.data.id,
      stock: this.stock.value,
      entryPrice: this.entryPrice.value,
      entryDate: this.parseDate(this.entryDate.value),
      stopLoss: this.stopLoss.value,
      amountRisked: this.amountRisked.value,
      riskPercentPosition: this.riskPercentPosition.value,
      riskPercentPortfolio: this.riskPercentPortfolio.value,
      tradeType: this.tradeType.value,
      shortLong: this.shortLong.value,
      chartPattern: this.chartPattern.value,
      exitPrice: this.exitPrice.value,
      exitDate: this.parseDate(this.exitDate.value),
      commentsAfterBuy: this.commentsAfterBuy.value,
      commentsAfterSell: this.commentsAfterSell.value
    };

    return trade;
  }

  parseDate(oldDate: Date): Date {
    let newDate = new Date(oldDate);
    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());

    return newDate;
  }

  get id(): AbstractControl {
    return this.editTradeFormGroup.get('id');
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

  get stopLoss(): AbstractControl {
    return this.editTradeFormGroup.get('stopLoss');
  }

  get amountRisked(): AbstractControl {
    return this.editTradeFormGroup.get('amountRisked');
  }

  get riskPercentPosition(): AbstractControl {
    return this.editTradeFormGroup.get('riskPercentPosition');
  }

  get riskPercentPortfolio(): AbstractControl {
    return this.editTradeFormGroup.get('riskPercentPortfolio');
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
