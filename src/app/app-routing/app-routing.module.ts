import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import { AccommodationsWrapperComponent } from '../accommodations/accommodations-wrapper/accommodations-wrapper.component';
import { UsersComponent } from '../users/users/users.component';
import { LocationComponent } from '../accommodations/location/location.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'accommodations', component: AccommodationsWrapperComponent},
  {path: 'users', component: UsersComponent},
  {path: 'location/:id_accommodation', component: LocationComponent}
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
