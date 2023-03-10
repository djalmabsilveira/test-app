import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-completed-purchase',
  templateUrl: './completed-purchase.component.html',
  styleUrls: ['./completed-purchase.component.css'],
})
export class CompletedPurchaseComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}
}
