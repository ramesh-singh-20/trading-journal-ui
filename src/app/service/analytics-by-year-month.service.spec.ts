import { TestBed } from '@angular/core/testing';

import { AnalyticsByYearMonthService } from './analytics-by-year-month.service';

describe('AllAnalyticsByYearMonthService', () => {
  let service: AnalyticsByYearMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsByYearMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
