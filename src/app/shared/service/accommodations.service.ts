import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Accommodation } from '../../accommodations/accommodation';
import { ACCOMMODATIONS } from '../../shared/service/mock/mock-accommodations.service';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  constructor() { }

  getAccommodations(): Observable<Accommodation[]> {
    return of (ACCOMMODATIONS);
  }
  getAccommodation(id: number): Observable<Accommodation> {
    return of(ACCOMMODATIONS.find(accommodation => accommodation.id_accommodation === id));
  }
}
