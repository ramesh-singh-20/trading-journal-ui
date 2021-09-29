import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TradeService } from 'src/app/service/trade.service';
import {MatDialogRef} from '@angular/material/dialog';
import { Trade } from 'src/app/model/trade.interface';

@Component({
  selector: 'app-add-trade-dialog',
  templateUrl: './add-trade-dialog.component.html',
  styleUrls: ['./add-trade-dialog.component.scss']
})
export class AddTradeDialogComponent implements OnInit {
  addTradeFormGroup: any;

  constructor(private tradeService: TradeService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddTradeDialogComponent>) { 
      this.addTradeFormGroup= this.fb.group(
        {
          stock: ['', Validators.required]
        }
      )
    }

  ngOnInit(): void {
  }

  get stock(): AbstractControl {
    return this.addTradeFormGroup.get('stock');
  }

  onSubmit(): void {
    if(this.addTradeFormGroup.valid){
      console.log("Inside Submit method.")
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
