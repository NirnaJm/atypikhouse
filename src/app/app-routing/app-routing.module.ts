import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import { AccommodationsComponent } from '../accommodations/accommodations/accommodations.component';
import { AccommodationsWrapperComponent } from '../accommodations/accommodations-wrapper/accommodations-wrapper.component';
import { ActivitiesComponent } from '../activities/activities/activities.component';
import { ActivityDetailsComponent } from '../activities/activity-details/activity-details.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'accommodations', component: AccommodationsWrapperComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'activity-details', component: ActivityDetailsComponent}

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
