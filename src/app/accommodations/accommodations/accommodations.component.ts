import { Component, OnInit } from '@angular/core';
import {MockAccommodationsService} from '../../shared/service/mock/mock-accommodations.service';
import { ACCOMMODATIONS } from '../../shared/service/mock/mock-accommodations.service';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {
  accommodations = ACCOMMODATIONS;


  constructor() { }

  ngOnInit() {
  }

}
