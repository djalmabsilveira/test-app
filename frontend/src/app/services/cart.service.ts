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

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getCartItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingData(): Observable<ShippingData[]> {
    return this.http.get<ShippingData[]>(`${API_URL}/shipping-data`);
  }
}
