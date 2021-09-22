import { TestBed } from '@angular/core/testing';

import { TradeDatasourceService } from './trade-datasource.service';

describe('TradeDatasourceService', () => {
  let service: TradeDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
