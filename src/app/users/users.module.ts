import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UsersRoutingModule} from "./users-routing/users-routing.module";
import { UserContentComponent } from './user-content/user-content.component';
import { UserReservationsComponent } from './user-content/user-reservations/user-reservations.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, UserNavbarComponent, UserContentComponent, UserReservationsComponent]
})
export class UsersModule { }
