import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from './../../../services/product.service';
import { Product } from './../../../interfaces/product';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products$!: Observable<Product[]>;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService
      .findProductById(productIdFromRoute)
      .subscribe((product) => (this.product = product));
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['shopping']);
  }
}
