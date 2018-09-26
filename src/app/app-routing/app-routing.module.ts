import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import { AccommodationsWrapperComponent } from '../accommodations/accommodations-wrapper/accommodations-wrapper.component';
import { UsersComponent } from '../users/users/users.component';
import { LocationComponent } from '../accommodations/location/location.component';
import { NewAccommodationComponent } from '../accommodations/new-accommodation/new-accommodation.component';
import { ActivityDetailsComponent } from '../activities/activity-details/activity-details.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'accommodations', component: AccommodationsWrapperComponent},
  {path: 'new-accommodation', component: NewAccommodationComponent},
  {path: 'users', component: UsersComponent},
  {path: 'location/:id_accommodation', component: LocationComponent},
  { path: 'activity-details/:id_activity', component: ActivityDetailsComponent}
  // {path: 'activities', component: ActivitiesComponent},
  // {path: 'activity-details', component: ActivityDetailsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
