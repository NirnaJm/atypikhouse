import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { LocationComponent } from './location/location.component';
import { AccommodationsWrapperComponent } from './accommodations-wrapper/accommodations-wrapper.component';
import { AccommodationsRoutingModule } from './accommodations-routing/accommodations-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AccommodationsRoutingModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [AccommodationsComponent, LocationComponent, AccommodationsWrapperComponent]
})
export class AccommodationsModule { }
