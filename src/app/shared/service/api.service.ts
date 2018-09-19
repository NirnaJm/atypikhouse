import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected baseUrl = environment.baseUrl;

  constructor(protected http:HttpClient) { }

  private getUrl(path) {
    return this.baseUrl+path;
  }

  get(path:string, params:HttpParams = new HttpParams()):Observable<any> {
    //https://atypik-mroldan.c9users.io/lumen/public/ + meslogment/1/4?coco=truc';

    return this.http.get(this.getUrl(path), {
      params : params,
      // responseType: 'json' as 'json'
    });
  }

  post() {

  }


  put(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.put(
      this.getUrl(path),
      JSON.stringify(body),
      {
        params: params,
      }
    );
  }

  delete() {

  }
}
