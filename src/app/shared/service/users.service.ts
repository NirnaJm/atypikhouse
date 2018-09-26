import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { Observable, of, ReplaySubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../users/user';
import { USERS } from './mock/mock-users.service';
import { StorageService } from './mock/storage.service';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = '/';

  private _user =  new ReplaySubject<User>(1);
  public user = this._user.asObservable();

  constructor(
              private storageService: StorageService,
               private http: HttpClient
              ) { }

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
   this.storageService.delete('user');
   this._user.next(null);
    // return throwError('DECONNECTE');
 }

 populate(){
   let user: User = this.storageService.getValue('user');
   this._user.next(user);
 }

 // updateUser (user: User): Observable<any> {
 //    return this.http.put(this.usersUrl, user, httpOptions).pipe(
 //      tap(_ => this.log(`updated user id=${user.id_user}`)),
 //      catchError(this.handleError<any>('updateUser'))
 //    );
 //  }

  createUser(user: User){
    // // register user
    //         // if (request.url.endsWith('/users/register') && request.method === 'POST') {
    //         //     // get new user object from post body
    //             let newUser = request.body;
    //         //
    //         //     // validation
    //         //     let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
    //         //     if (duplicateUser) {
    //         //         return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
    //         //     }
    //
    //             // save new user
    //             newUser.id = users.length + 1;
    //             users.push(newUser);
    //             localStorage.setItem('users', JSON.stringify(users));
    //
    //             // respond 200 OK
    //             return of(new HttpResponse({ status: 200 }));
    //         // }
      user.id_user= USERS.length +1;

      USERS.push(user);


  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`UserService: ${message}`);
  }
}
