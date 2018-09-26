import { TestBed } from '@angular/core/testing';

import { ReservationsService } from './reservations.service';

describe('ReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationsService = TestBed.get(ReservationsService);
    expect(service).toBeTruthy();
  });
});
