import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndShortLongComponent } from './analytics-by-year-and-short-long.component';

describe('AbalyticsByYearAndShortLongComponent', () => {
  let component: AnalyticsByYearAndShortLongComponent;
  let fixture: ComponentFixture<AnalyticsByYearAndShortLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsByYearAndShortLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByYearAndShortLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
