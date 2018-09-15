import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsWrapperComponent } from './accommodations-wrapper.component';

describe('AccommodationsWrapperComponent', () => {
  let component: AccommodationsWrapperComponent;
  let fixture: ComponentFixture<AccommodationsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
