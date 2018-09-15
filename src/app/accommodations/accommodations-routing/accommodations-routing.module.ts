import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AccommodationsComponent } from '../accommodations/accommodations.component';
import { LocationComponent } from '../location/location.component';
import { AccommodationsWrapperComponent } from '../accommodations-wrapper/accommodations-wrapper.component';

const accommodationsRoutes: Routes = [
  {path: '',
  component: AccommodationsWrapperComponent,
  children:[
    {path: '', component: AccommodationsComponent},
    {path: 'location', component: LocationComponent}
  ]}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accommodationsRoutes)
  ],
  declarations: []
})
export class AccommodationsRoutingModule { }
