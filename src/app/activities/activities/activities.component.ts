import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../shared/service/activities.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    // activities = ACTIVITIES;
    activities: Activity[];

    selectedActivity:Activity;
    constructor(private activitiesService:ActivitiesService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities():void{
  this.activitiesService.getActivities().subscribe(activities=>this.activities=activities);
  }

  selectActivity(activity:Activity){
  this.selectedActivity = activity;
  }



}
