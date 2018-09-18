import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from '../login/login.component';
import { UserContentComponent } from '../user-content/user-content.component';
import { UserReservationsComponent } from '../user-content/user-reservations/user-reservations.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
// const usersRoutes: Routes = [
//   {path: 'users', component: UsersComponent},
// ];

const usersRoutes: Routes = [
  { path: 'users',
    component: UsersComponent,
    children: [{  path: ':id_user/user-reservations',
                  component: UserReservationsComponent,

              }]
  },
  { path: 'login', component: LoginComponent},
  { path: 'users/:id_user', component: UsersComponent},
  { path: 'users/:id_user/user-update', component: UserUpdateComponent},
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
