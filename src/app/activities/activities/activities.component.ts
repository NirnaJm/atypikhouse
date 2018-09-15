import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import {MockActivitiesService} from '../../shared/service/mock/mock-activities.service';
import { ACTIVITIES } from '../../shared/service/mock/mock-activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    activities = ACTIVITIES;

  constructor() { }

  ngOnInit() {
  }

}
