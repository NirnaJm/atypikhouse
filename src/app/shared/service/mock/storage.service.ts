import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public setValue(key:string, value:any){
    window.localStorage[key] = JSON.stringify(value);
  }

  public getValue(key:string){
    let val = window.localStorage[key];
    if (val === undefined || val === null){
      return null;
    }
    return JSON.parse(val);
  }

  public delete(key:string){
     delete window.localStorage[key];
    // window.localStorage[key] = JSON.stringify(value);
    //return JSON.parse(window.localStorage[key]);
  }

  constructor() { }
}
