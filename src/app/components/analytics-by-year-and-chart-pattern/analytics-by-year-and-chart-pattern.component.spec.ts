import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndChartPatternComponent } from './analytics-by-year-and-chart-pattern.component';

describe('AnalyticsByYearAndChartPatternComponent', () => {
  let component: AnalyticsByYearAndChartPatternComponent;
  let fixture: ComponentFixture<AnalyticsByYearAndChartPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsByYearAndChartPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByYearAndChartPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
