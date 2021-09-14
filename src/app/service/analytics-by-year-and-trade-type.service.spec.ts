import { TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndTradeTypeService } from './analytics-by-year-and-trade-type.service';

describe('AnalyticsByYearAndTradeTypeService', () => {
  let service: AnalyticsByYearAndTradeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsByYearAndTradeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
