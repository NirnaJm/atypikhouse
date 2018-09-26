import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { AccommodationsModule } from './accommodations/accommodations.module';
import { ActivitiesModule } from './activities/activities.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { ReservationComponent } from './shared/service/widget/reservation/reservation.component';

import { MockActivitiesService } from './shared/service/mock/mock-activities.service';
import { MockAccommodationsService } from './shared/service/mock/mock-accommodations.service';
import { MockUsersService } from './shared/service/mock/mock-users.service';
import { UsersService } from './shared/service/users.service';
import { AccommodationsService } from './shared/service/accommodations.service';
import { StorageService } from './shared/service/mock/storage.service';
import { ReservationsService } from './shared/service/reservations.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ReservationComponent

  ],
  imports: [
    BrowserModule,
    HomeModule,
    ActivitiesModule,
    AccommodationsModule,
    UsersModule,
    AppRoutingModule,
    FormsModule,
    MyDatePickerModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MockActivitiesService,
    MockAccommodationsService,
    MockUsersService,
    UsersService,
    AccommodationsService,
    StorageService,
    ReservationsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
