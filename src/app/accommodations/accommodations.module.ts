import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { LocationComponent } from './location/location.component';
import { NewAccommodationComponent } from './new-accommodation/new-accommodation.component';
import { AccommodationsWrapperComponent } from './accommodations-wrapper/accommodations-wrapper.component';
import { ReservationComponent } from '../shared/service/widget/reservation/reservation.component';

import { AccommodationsRoutingModule } from './accommodations-routing/accommodations-routing.module';
import { RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
// import { NewAccommodationComponent } from './new-accommodation/new-accommodation.component';
// import { ReservationComponent} from '../';


@NgModule({
  imports: [
    CommonModule,
    AccommodationsRoutingModule,
    RouterModule,
    MyDatePickerModule,
    FormsModule

  ],
  exports: [
    RouterModule

  ],
  declarations: [AccommodationsComponent, LocationComponent, AccommodationsWrapperComponent, ReservationComponent, NewAccommodationComponent]
})
export class AccommodationsModule { }
