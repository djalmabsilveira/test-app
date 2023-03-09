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

  addToCart(product: Product) {
    this.items.push(product);
    localStorage.setItem(this.storageCartKey, JSON.stringify(this.items));

    const temp = JSON.parse(localStorage.getItem(this.storageCartKey) || '[]');
    console.log(temp);
  }

  getCartItems() {
    return (this.items = JSON.parse(
      localStorage.getItem(this.storageCartKey) || '[]'
    ));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  addCartToStorage() {}

  getShippingData(): Observable<ShippingData[]> {
    return this.http.get<ShippingData[]>(`${API_URL}/shipping-data`);
  }
}
