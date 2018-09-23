import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule} from "./users-routing/users-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserContentComponent } from './user-content/user-content.component';
import { UserReservationsComponent } from './user-content/user-reservations/user-reservations.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent, UserNavbarComponent, UserContentComponent, UserReservationsComponent,  UserUpdateComponent]
})
export class UsersModule { }
