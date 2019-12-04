import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdRatingDecimalComponent } from './ngbd-rating-decimal.component';

describe('NgbdRatingDecimalComponent', () => {
  let component: NgbdRatingDecimalComponent;
  let fixture: ComponentFixture<NgbdRatingDecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdRatingDecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdRatingDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
