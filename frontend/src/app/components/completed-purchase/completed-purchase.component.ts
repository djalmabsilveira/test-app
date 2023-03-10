import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/interfaces/order';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { ShippingData } from './../../interfaces/shipping-data';
import { Product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-completed-purchase',
  templateUrl: './completed-purchase.component.html',
  styleUrls: ['./completed-purchase.component.css'],
})
export class CompletedPurchaseComponent implements OnInit {
  order: Order = this.shoppingService.getOrderFromStorage();
  items: Product[] = this.order.products;
  totalCost: number = this.shoppingService.calculateTotalCost(this.items);
  shipping!: ShippingData;
  user$!: Observable<User>;

  constructor(
    private shoppingService: ShoppingService,
    private useService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const shippingID = this.order.shipping;
    this.getShippingData(shippingID);
    if (this.order.userId) {
      this.user$ = this.useService.findUserByID(this.order.userId);
    }
    // this.cartService.clearStorage();
  }

  getShippingData(id: string) {
    this.shoppingService
      .findShippingByID(id)
      .subscribe((shippingData) => (this.shipping = shippingData));
  }
}
