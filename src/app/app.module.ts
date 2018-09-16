import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AccommodationsModule } from './accommodations/accommodations.module';
import { ActivitiesModule } from './activities/activities.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { MockActivitiesService } from './shared/service/mock/mock-activities.service';
import { MockAccommodationsService } from './shared/service/mock/mock-accommodations.service';
import { MockUsersService } from './shared/service/mock/mock-users.service';
import { UsersService } from './shared/service/users.service';
import { AccommodationsService } from './shared/service/accommodations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ActivitiesModule,
    AccommodationsModule,
    UsersModule,
    AppRoutingModule,
  ],
  providers: [
    MockActivitiesService,
    MockAccommodationsService,
    MockUsersService,
    UsersService,
    AccommodationsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
