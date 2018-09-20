import { Component, OnInit } from '@angular/core';

import {ActivitiesService} from '../../shared/service/activities.service';
import {Activity} from "../../activities/activity";
import { ActivitiesComponent } from '../../activities/activities/activities.component';

import { AccommodationsService } from '../../shared/service/accommodations.service';
import { Accommodation } from '../..//accommodations/accommodation';
import { AccommodationsComponent } from '../../accommodations/accommodations/accommodations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activities: Activity[];
  accommodations: Accommodation[];

  selectedAccommodation:Accommodation;
  selectedActivity:Activity;

  constructor(
    private  activitiesService:ActivitiesService,
    private accommodationsService:AccommodationsService
  ) { }

  ngOnInit() {
    this.getActivities();
    this.getAccommodations();
  }

  getActivities(): void {
   this.activitiesService.getActivities().subscribe(activities=>this.activities=activities);
  }

  getAccommodations():void{
   this.accommodationsService.getAccommodations().subscribe(accommodations=>this.accommodations=accommodations);
  }

  selectActivity(activity:Activity){
   this.selectedActivity = activity;
  }

  selectAccommodation(accommodation:Accommodation){
    this.selectedAccommodation = accommodation;
  }

}
