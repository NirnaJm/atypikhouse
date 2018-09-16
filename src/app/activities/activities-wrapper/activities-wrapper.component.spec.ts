import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesWrapperComponent } from './activities-wrapper.component';

describe('ActivitiesWrapperComponent', () => {
  let component: ActivitiesWrapperComponent;
  let fixture: ComponentFixture<ActivitiesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
