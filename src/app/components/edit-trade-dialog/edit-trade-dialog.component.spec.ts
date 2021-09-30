import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradeDialogComponent } from './edit-trade-dialog.component';

describe('EditTradeDialogComponent', () => {
  let component: EditTradeDialogComponent;
  let fixture: ComponentFixture<EditTradeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTradeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
