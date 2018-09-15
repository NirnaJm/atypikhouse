import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ActivitiesComponent } from '../activities/activities.component';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';

// const activitiesRoutes: Routes = [
  // {path: '', component: ActivitiesComponent},
  // {path: 'activity-details', component: ActivityDetailsComponent}

// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(activitiesRoutes)
  ],
  declarations: []
})
export class ActivitiesRoutingModule { }
