import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../model/reservation';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(protected api: ApiService) { }

  save(reservation: Reservation) {



    console.log(reservation)

    let dateDebut = reservation.dateDepart.date.day + "-" + reservation.dateDepart.date.month + "-" + reservation.dateDepart.date.year;
    let dateFin = reservation.dateFin.date.day + "-" + reservation.dateFin.date.month + "-" + reservation.dateFin.date.year;
    console.log(dateFin.toString());

    let book = {
      "logement": 5,
      "debut": dateDebut.toString(),
      "fin": dateFin.toString(),
      "user": 1
    }
    // this.api.booking(book).then(res => {
    //   console.log(res)
    // }).catch(() => {
    //   console.log("impossible d'ajouter la resa");
    // })
    let params = new HttpParams();
    params.append('logement', reservation.idLogement.toString());
    params.append('debut', dateDebut);
    params.append('fin', dateFin);
    params.append('user', reservation.idUser.toString());

    return this.api.get('reservation/insert',params);
  }
}
