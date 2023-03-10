import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ValidationMessageComponent } from './components/atom-components/validation-message/validation-message.component';
import { StoreComponent } from './views/store/store.component';
import { ShoppingComponent } from './views/shopping/shopping.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    ValidationMessageComponent,
    StoreComponent,
    ShoppingComponent,
    OrderSummaryComponent,
    CompletedPurchaseComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
