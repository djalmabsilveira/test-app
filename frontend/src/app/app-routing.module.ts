import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './views/store/store.component';
import { ShoppingComponent } from './views/shopping/shopping.component';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: 'products',
    component: StoreComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      { path: ':productId', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: [
      { path: '', component: CartComponent },
      { path: 'order-summary', component: OrderSummaryComponent },
      { path: 'completed-purchase', component: CompletedPurchaseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
