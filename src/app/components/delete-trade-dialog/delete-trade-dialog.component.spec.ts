import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTradeDialogComponent } from './delete-trade-dialog.component';

describe('DeleteTradeDialogComponent', () => {
  let component: DeleteTradeDialogComponent;
  let fixture: ComponentFixture<DeleteTradeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTradeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
