import { TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndShortLongService } from './analytics-by-year-and-short-long.service';

describe('AnalyticsByYearAndShortLongService', () => {
  let service: AnalyticsByYearAndShortLongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsByYearAndShortLongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
