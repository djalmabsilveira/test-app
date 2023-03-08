import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SignupComponent } from './views/home/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './views/home/login/login.component';
import { StoreComponent } from './views/store/store.component';
import { ShoppingComponent } from './views/shopping/shopping.component';

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
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cart',
      },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
