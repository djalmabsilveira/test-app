import { Product } from 'src/app/interfaces/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './../interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingData } from '../interfaces/shipping-data';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  orderKey = 'order';

  constructor(private http: HttpClient) {}

  orderSave(order: Order) {
    localStorage.setItem(this.orderKey, JSON.stringify(order));
  }

  orderSubmit(order: Order): Observable<Order> {
    return this.http.post<Order>(`${API_URL}/orders`, order);
  }

  getOrderFromStorage(): Order {
    return JSON.parse(localStorage.getItem(this.orderKey) || '[]');
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${API_URL}/orders/${orderId}`);
  }

  findShippingByID(id: string): Observable<ShippingData> {
    return this.http.get<ShippingData>(`${API_URL}/shipping-data/${id}`);
  }

  calculateTotalCost(items: Product[]) {
    let total = 0;
    for (let index = 0; index < items.length; index++) {
      total += Number(items[index].price);
    }
    return total;
  }
}
