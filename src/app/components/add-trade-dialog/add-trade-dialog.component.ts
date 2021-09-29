import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TradeService } from 'src/app/service/trade.service';
import {MatDialogRef} from '@angular/material/dialog';
import { Trade } from 'src/app/model/trade.interface';
import { DateValidator } from 'src/app/validators/date.validator';

@Component({
  selector: 'app-add-trade-dialog',
  templateUrl: './add-trade-dialog.component.html',
  styleUrls: ['./add-trade-dialog.component.scss']
})
export class AddTradeDialogComponent implements OnInit {
  addTradeFormGroup: any;
  priceRegex= /^-?\d*[.,]?\d{0,2}$/;

  constructor(private tradeService: TradeService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddTradeDialogComponent>) { 
      this.addTradeFormGroup= this.fb.group(
        {
          stock: ['', Validators.required],
          entryPrice: ['', [Validators.required, Validators.pattern(this.priceRegex)]],
          entryDate: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])],
          tradeType: ['', Validators.required],
          shortLong: ['', Validators.required],
          chartPattern: ['', Validators.required],
          exitPrice: ['', [Validators.pattern(this.priceRegex)]],
          exitDate: ['', Validators.compose([DateValidator.dateVaidator])],

        }
      )
    }

  ngOnInit(): void {
  }

  get stock(): AbstractControl {
    return this.addTradeFormGroup.get('stock');
  }

  get entryPrice(): AbstractControl {
    return this.addTradeFormGroup.get('entryPrice');
  }

  get entryDate(): AbstractControl {
    return this.addTradeFormGroup.get('entryDate');
  }

  get tradeType(): AbstractControl {
    return this.addTradeFormGroup.get('tradeType');
  }

  get shortLong(): AbstractControl {
    return this.addTradeFormGroup.get('shortLong');
  }

  get chartPattern(): AbstractControl {
    return this.addTradeFormGroup.get('chartPattern');
  }

  get exitPrice(): AbstractControl {
    return this.addTradeFormGroup.get('exitPrice');
  }

  get exitDate(): AbstractControl {
    return this.addTradeFormGroup.get('exitDate');
  }

  get commentsAfterBuy(): AbstractControl {
    return this.addTradeFormGroup.get('commentsAfterBuy');
  }

  get commentsAfterSell(): AbstractControl {
    return this.addTradeFormGroup.get('commentsAfterSell');
  }


  onSubmit(): void {
    if(this.addTradeFormGroup.valid){
      console.log("Inside Submit method.")
      console.log("Date Value: "+this.entryDate.value)
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onReset(): void {
    this.addTradeFormGroup.reset();
  }

 /*  addTradeFormGroupToTrade(): Trade {
    const trade: Trade ={
      stock: this.
    }
  } */

}
