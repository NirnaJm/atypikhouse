import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeModule } from './home/home.module';
import { AccommodationsModule } from './accommodations/accommodations.module';
import { ActivitiesModule } from './activities/activities.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { MockActivitiesService } from './shared/service/mock/mock-activities.service';
import { MockAccommodationsService} from './shared/service/mock/mock-accommodations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ActivitiesModule,
    AccommodationsModule

  ],
  providers: [MockActivitiesService, MockAccommodationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
