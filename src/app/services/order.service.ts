import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders() { 
    let token = 'Bearer '+localStorage.getItem('token');
    //headers.append('Authorization', 'Bearer '+token);
    const httpOptions = {
     headers: new HttpHeaders({
       'Authorization':  token,
     })
   };
    return this.httpClient.get('/api/orders', httpOptions).pipe(map(response => response));
  }
}
