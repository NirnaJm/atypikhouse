import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

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
    this.api.booking(book).then(res => {
      console.log(res)
    }).catch(() => {
      console.log("impossible d'ajouter la resa");
    })
    // return this.api.put('reservation/insert',
    //   "logement="+reservation.idLogement+
    //   "&debut="+dateDepart.getFullYear()+'-'+(dateDepart.getMonth()+1)+'-'+ dateDepart.getDate()+
    //   "&fin="+dateFin.getFullYear()+'-'+(dateFin.getMonth()+1)+'-'+ dateFin.getDate()+
    //   "&user="+reservation.idUser
    // )
  }
}
