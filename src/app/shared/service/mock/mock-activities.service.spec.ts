import { TestBed } from '@angular/core/testing';

import { MockActivitiesService } from './mock-activities.service';

describe('MockActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockActivitiesService = TestBed.get(MockActivitiesService);
    expect(service).toBeTruthy();
  });
});
