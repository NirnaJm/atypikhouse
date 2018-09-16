import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { UserContentComponent } from '../user-content/user-content.component';
import { UserReservationsComponent } from '../user-content/user-reservations/user-reservations.component';
// const usersRoutes: Routes = [
//   {path: 'users', component: UsersComponent},
// ];

const usersRoutes: Routes = [
  { path: 'users',
    component: UsersComponent,
    children: [{  path: 'user-reservations',
                  component: UserReservationsComponent,

              }]
  },
  // {path: 'activity-details', component: ActivityDetailsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class UsersRoutingModule { }
