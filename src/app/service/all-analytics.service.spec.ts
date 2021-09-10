import { TestBed } from '@angular/core/testing';

import { AllAnalyticsService } from './all-analytics.service';

describe('AllAnalyticsService', () => {
  let service: AllAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
