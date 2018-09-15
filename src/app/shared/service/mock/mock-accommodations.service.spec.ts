import { TestBed } from '@angular/core/testing';

import { MockAccommodationsService } from './mock-accommodations.service';

describe('MockAccommodationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockAccommodationsService = TestBed.get(MockAccommodationsService);
    expect(service).toBeTruthy();
  });
});
