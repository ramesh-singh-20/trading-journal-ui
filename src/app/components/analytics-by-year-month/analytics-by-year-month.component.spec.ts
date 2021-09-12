import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByYearMonthComponent } from './analytics-by-year-month.component';

describe('AllAnalyticsByYearMonthComponent', () => {
  let component: AnalyticsByYearMonthComponent;
  let fixture: ComponentFixture<AnalyticsByYearMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsByYearMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
