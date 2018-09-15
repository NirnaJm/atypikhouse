import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
// import { ActivitiesRoutingModule } from './activities-routing/activities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // ActivitiesRoutingModule,
    AppRoutingModule
  ],
  declarations: [ActivitiesComponent, ActivityDetailsComponent]
})
export class ActivitiesModule { }
