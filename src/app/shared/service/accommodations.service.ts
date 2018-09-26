import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Accommodation } from '../../accommodations/accommodation';
import { ACCOMMODATIONS } from '../../shared/service/mock/mock-accommodations.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  constructor(private api:ApiService) { }

  getAccommodations(): Observable<Accommodation[]> {
    return this.api.get('logement');
    // return of (ACCOMMODATIONS);
  }
  getAccommodation(id: number): Observable<Accommodation> {
      return this.api.get('logement/'+id);
    // return of(ACCOMMODATIONS.find(accommodation => accommodation.id_accommodation === id));
  }
}
