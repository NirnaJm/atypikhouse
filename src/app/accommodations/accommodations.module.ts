import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { LocationComponent } from './location/location.component';
import { AccommodationsWrapperComponent } from './accommodations-wrapper/accommodations-wrapper.component';
import { AccommodationsRoutingModule } from './accommodations-routing/accommodations-routing.module';
import { RouterModule } from '@angular/router';
import { ReservationComponent } from '../shared/service/widget/reservation/reservation.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
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
  declarations: [AccommodationsComponent, LocationComponent, AccommodationsWrapperComponent, ReservationComponent]
})
export class AccommodationsModule { }
