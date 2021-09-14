import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndTradeTypeComponent } from './analytics-by-year-and-trade-type.component';

describe('AnalyticsByYearAndTradeTypeComponent', () => {
  let component: AnalyticsByYearAndTradeTypeComponent;
  let fixture: ComponentFixture<AnalyticsByYearAndTradeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsByYearAndTradeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByYearAndTradeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
