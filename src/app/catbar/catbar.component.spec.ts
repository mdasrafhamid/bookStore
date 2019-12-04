import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatbarComponent } from './catbar.component';

describe('CatbarComponent', () => {
  let component: CatbarComponent;
  let fixture: ComponentFixture<CatbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
