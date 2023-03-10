import { Product } from './../../interfaces/product';
import { Router } from '@angular/router';
import { ShoppingService } from './../../services/shopping.service';
import { Order } from './../../interfaces/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { ShippingData } from './../../interfaces/shipping-data';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  shippingData!: Observable<ShippingData[]>;
  items: Product[] = this.cartService.getCartItemsFromStorage();
  order: Order = { products: [], shipping: '' };

  constructor(
    private cartService: CartService,
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shippingData = this.cartService.getShippingData();
  }

  removeItem(index: number) {
    this.cartService.removeItemFromCart(index);
  }

  orderSubmit() {
    this.order.products = this.items;
    this.shoppingService.orderSave(this.order);
    this.router.navigate(['/shopping/order-summary']);
  }
}
