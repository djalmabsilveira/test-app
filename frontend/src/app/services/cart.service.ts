import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../interfaces/product';
import { ShippingData } from './../interfaces/shipping-data';
import { environment } from './../../environments/environment.prod';
import { Order } from '../interfaces/order';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  storageCartKey = 'cartItems';

  constructor(private http: HttpClient) {}

  addItemToCart(product: Product) {
    this.items.push(product);
    this.addCartToStorage();
  }

  addCartToStorage() {
    localStorage.setItem(this.storageCartKey, JSON.stringify(this.items));
  }

  removeItemFromCart(index: number) {
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.addCartToStorage();
  }

  getCartItemsFromStorage() {
    return (this.items = JSON.parse(
      localStorage.getItem(this.storageCartKey) || '[]'
    ));
  }

  getShippingData(): Observable<ShippingData[]> {
    return this.http.get<ShippingData[]>(`${API_URL}/shipping-data`);
  }

  orderSubmit(order: Order): Observable<Order> {
    return this.http.post<Order>(`${API_URL}/orders`, order);
  }

  clearCart() {
    this.items = [];
    this.addCartToStorage();
  }
}
