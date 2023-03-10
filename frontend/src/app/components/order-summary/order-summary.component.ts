import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { ShippingData } from 'src/app/interfaces/shipping-data';
import { User } from 'src/app/interfaces/user';
import { ShoppingService } from 'src/app/services/shopping.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  order = this.shoppingService.getOrderFromStorage();
  items: Product[] = this.order.products;
  shipping!: ShippingData;
  totalCost: number = this.shoppingService.calculateTotalCost(this.items);
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shoppingService: ShoppingService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const shippingID = this.order.shipping;

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(40),
        ],
      ],
    });

    this.getShippingData(shippingID);
  }

  getShippingData(id: string) {
    this.shoppingService
      .findShippingByID(id)
      .subscribe((shippingData) => (this.shipping = shippingData));
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as User;
    this.userService.signup(newUser).subscribe(
      (user) => {
        this.order.userId = user.id;
        this.shoppingService.orderSubmit(this.order).subscribe((order) => {
          this.shoppingService.orderSave(order);
          this.router.navigate(['/shopping/completed-purchase']);
        });
      },
      (err) => console.log(err)
    );
  }
}
