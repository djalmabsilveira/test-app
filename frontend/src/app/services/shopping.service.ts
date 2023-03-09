import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './../interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private http: HttpClient) {}

  orderSubmit(order: Order): Observable<Order> {
    return this.http.post<Order>(`${API_URL}/orders`, order);
  }
}
