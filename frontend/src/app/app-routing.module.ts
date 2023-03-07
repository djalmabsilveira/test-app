import { SignupComponent } from './views/home/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './views/products/products.component';
import { LoginComponent } from './views/home/login/login.component';

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
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
