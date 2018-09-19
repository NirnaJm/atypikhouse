import {Component, Input, OnInit} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import {ReservationService} from '../../../service/reservations.service';
import {Reservation} from '../../../model/reservation';
import {UsersService} from '../../../service/users.service';
import {User} from '../../../../users/user';
import {Accommodation} from '../../../../accommodations/accommodation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input() accommodation:Accommodation;

  public myDatePickerOptions: IMyDpOptions = {};
  dateDepart:any;
  dateFin:any;

  user:User;

  constructor(protected reservationsService:ReservationService,
              protected usersService:UsersService) { }

  ngOnInit() {
    this.usersService.user.subscribe(user => this.user = user);
  }

  sendReservation(event:Event) {
    if (!this.user) {
      return;
    }
    event.preventDefault();
    let reservation = new Reservation();
    reservation.dateFin = this.dateFin;
    reservation.dateDepart = this.dateDepart;
    reservation.idUser = this.user.id_user;
    reservation.idLogement = this.accommodation.id_accommodation;
    this.reservationsService.save(reservation).subscribe( res =>
    console.log(res)
  );}
}
