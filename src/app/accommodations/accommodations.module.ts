import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { LocationComponent } from './location/location.component';
import { AccommodationsWrapperComponent } from './accommodations-wrapper/accommodations-wrapper.component';
import { AccommodationsRoutingModule } from './accommodations-routing/accommodations-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AccommodationsRoutingModule
  ],
  declarations: [AccommodationsComponent, LocationComponent, AccommodationsWrapperComponent]
})
export class AccommodationsModule { }
