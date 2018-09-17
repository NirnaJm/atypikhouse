import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public setValue(key:string, value:any){
    window.localStorage[key] = JSON.stringify(value);
  }

  public getValue(key:string){
    return JSON.parse(window.localStorage[key]);
  }

  public delete(key:string){
    delete window.localStorage[key];
  }

  constructor() { }
}
