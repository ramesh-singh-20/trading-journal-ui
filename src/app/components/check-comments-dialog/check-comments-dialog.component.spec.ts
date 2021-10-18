import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCommentsDialogComponent } from './check-comments-dialog.component';

describe('CheckCommentsDialogComponent', () => {
  let component: CheckCommentsDialogComponent;
  let fixture: ComponentFixture<CheckCommentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCommentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCommentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
