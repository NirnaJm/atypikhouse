import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UsersRoutingModule} from "./users-routing/users-routing.module";
import { UserContentComponent } from './user-content/user-content.component';
import { UserReservationsComponent } from './user-content/user-reservations/user-reservations.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [UsersComponent, UserNavbarComponent, UserContentComponent, UserReservationsComponent, LoginComponent]
})
export class UsersModule { }
