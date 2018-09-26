import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AccommodationsService} from '../../shared/service/accommodations.service';
// import { ACCOMMODATIONS } from '../../shared/service/mock/mock-accommodations.service';
// import { ReservationComponent } from '../../shared/service/widget/reservation/reservation.component';
import {Accommodation } from "../accommodation";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  accommodation: Accommodation;

  constructor(
    private accommodationsService: AccommodationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAccommodation();
  }

  getAccommodation(): void {
   const id = +this.route.snapshot.paramMap.get('id_accommodation');
   this.accommodationsService.getAccommodation(id)
     .subscribe(accommodation => this.accommodation = accommodation);
 }

}
