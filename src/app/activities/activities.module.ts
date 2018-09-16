import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivitiesWrapperComponent } from './activities-wrapper/activities-wrapper.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivitiesRoutingModule } from './activities-routing/activities-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ActivitiesRoutingModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [ActivitiesComponent, ActivityDetailsComponent, ActivitiesWrapperComponent]
})
export class ActivitiesModule { }
