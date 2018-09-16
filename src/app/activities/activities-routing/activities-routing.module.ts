import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ActivitiesComponent } from '../activities/activities.component';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';
import { ActivitiesWrapperComponent } from '../activities-wrapper/activities-wrapper.component';
// import { UsersComponent } from '../../users/users/users.component';

const activitiesRoutes: Routes = [
  { path: 'activities',
    component: ActivitiesWrapperComponent,
    children: [
      { path: '',
        component: ActivitiesComponent
      },
      {
        path: 'activity-details',
        component: ActivityDetailsComponent
      }
    ]
  },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  // }
  // {path: 'activity-details', component: ActivityDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(activitiesRoutes)
  ],
  declarations: []
})
export class ActivitiesRoutingModule { }
