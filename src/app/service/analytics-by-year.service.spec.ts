import { TestBed } from '@angular/core/testing';

import { AnalyticsByYearService } from './analytics-by-year.service';

describe('AnalyticsByYearService', () => {
  let service: AnalyticsByYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsByYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
