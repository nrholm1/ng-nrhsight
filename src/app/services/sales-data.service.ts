import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  myApiUrl: string = "https://localhost:44354/api/order/"; 


  constructor(private _http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number)
  {
    return this._http.get(this.myApiUrl + pageIndex + '/' + pageSize)
      .pipe(map(res => res));
  }

  getOrdersByCustomer(n: number)
  {
    return this._http.get(this.myApiUrl + 'bycustomer/' + n)
      .pipe(map(res => res));
  }

  getOrdersByState()
  {
    return this._http.get(this.myApiUrl + 'bystate')
      .pipe(map(res => res));
  }
}
