import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnalyticsComponent } from './all-analytics.component';

describe('AllTradesComponent', () => {
  let component: AllAnalyticsComponent;
  let fixture: ComponentFixture<AllAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
