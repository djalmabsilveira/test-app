import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../interfaces/product';
import { ShippingData } from './../interfaces/shipping-data';
import { environment } from './../../environments/environment.prod';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  // JSON.parse(localStorage.getItem(this.cartKey) || '[]');

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

  clearCart() {
    this.items = [];
    this.addCartToStorage();
  }

  getShippingData(): Observable<ShippingData[]> {
    return this.http.get<ShippingData[]>(`${API_URL}/shipping-data`);
  }
}
