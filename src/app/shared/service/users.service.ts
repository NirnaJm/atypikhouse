import { Injectable } from '@angular/core';

import { Observable, of, ReplaySubject, throwError } from 'rxjs';

import { User } from '../../users/user';
import { USERS } from './mock/mock-users.service';
import { StorageService } from './mock/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user =  new ReplaySubject<User>(1);
  public user = this._user.asObservable();

  constructor( private storageService: StorageService) { }

  getUsers(): Observable<User[]> {
   return of(USERS);
 }

 getUser(id: number): Observable<User> {
   return of(USERS.find(user => user.id_user === id));
 }

 login(email: string, password: string) : Observable<User>{
   const user : User = USERS.find((user: User) => {
     return user.email === email && user.password === password;
   });

   if(user){
     this._user.next(user);
     this.storageService.setValue('user', user);
     return of(user);
   }else{
     this._user.next(null);
     return throwError('Credentials not matching');
   }

 }

 deconnexion(){
   let user: User = this.storageService.delete('user');
   this._user.next(null);
    // return throwError('DECONNECTE');
 }

 populate(){
   let user: User = this.storageService.getValue('user');
   this._user.next(user);
 }
}
