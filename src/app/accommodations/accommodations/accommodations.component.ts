import { Component, OnInit } from '@angular/core';
import { AccommodationsService } from '../../shared/service/accommodations.service';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {
  accommodations: Accommodation[];
  
  selectedAccommodation:Accommodation;
  constructor(private accommodationsService:AccommodationsService) { }

  ngOnInit() {
    this.getAccommodations();
  }

  getAccommodations():void{
    this.accommodationsService.getAccommodations().subscribe(accommodations=>this.accommodations=accommodations);
  }

  selectAccommodation(accommodation:Accommodation){
    this.selectedAccommodation = accommodation;
  }

}
