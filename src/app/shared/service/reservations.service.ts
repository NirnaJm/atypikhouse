import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(protected api:ApiService) { }

  save(reservation:Reservation){
    return this.api.put('reservations/insert',{
      debut : reservation.dateDepart.getFullYear()+'-'+(reservation.dateDepart.getMonth()+1)+'-'+reservation.dateDepart.getDate(),
      fin : reservation.dateFin.getFullYear()+'-'+(reservation.dateFin.getMonth()+1)+'-'+reservation.dateFin.getDate(),
      user : reservation.idUser,
      logement : reservation.idLogement
    })
  }
}
