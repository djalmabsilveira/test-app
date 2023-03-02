import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

import { ShippingData } from './../../interfaces/shipping-data';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  shippingData!: Observable<ShippingData[]>;

  items = this.cartService.getCartItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.shippingData = this.cartService.getShippingData();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn(
      'Seu pedido foi recebido e está em preparação!',
      this.checkoutForm.value
    );
    this.checkoutForm.reset();
  }
}
