import { TestBed } from '@angular/core/testing';

import { AnalyticsByYearAndChartTypeService } from './analytics-by-year-and-chart-type.service';

describe('AnalyticsByYearAndChartTypeService', () => {
  let service: AnalyticsByYearAndChartTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsByYearAndChartTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
