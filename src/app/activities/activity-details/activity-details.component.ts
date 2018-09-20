import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ActivitiesService} from '../../shared/service/activities.service';
import {Activity} from "../activity";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity: Activity;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getActivity();
  }

  getActivity(): void {
   const id = +this.route.snapshot.paramMap.get('id_activity');
   this.activitiesService.getActivity(id)
     .subscribe(activity => this.activity = activity);
  }

}
