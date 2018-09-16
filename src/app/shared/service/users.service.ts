import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../../users/user';
import { USERS } from './mock/mock-users.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }

  getAnts(): Observable<User[]> {
   return of(USERS);
 }

 getAnt(id: number): Observable<User> {
   return of(USERS.find(user => user.id_user === id));
 }
}
