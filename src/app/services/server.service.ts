import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) {
   }

  myApiUrl: string = "https://localhost:44354/api/server/";


  getServers(): Observable<Server[]> {
    return this._http.get(this.myApiUrl)
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
      .pipe(catchError(this.handleError));              // Does this work as intended? 
  }

  handleError(error: any): Observable<string> {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    const url = this.myApiUrl + msg.id;
    return this._http.put(url, msg, {headers: {'Content-Type' : 'application/json', 
                                               'Accept': 'q=0.8;application/json;q=0.9'}})
                                               .pipe(
                                                 map(res => JSON.parse(JSON.stringify(res))));
  }
}
