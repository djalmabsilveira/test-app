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
import { ProductsComponent } from './views/products/products.component';
import { LoginComponent } from './views/home/login/login.component';
import { SignupComponent } from './views/home/signup/signup.component';
import { ValidationMessageComponent } from './shared/components/atom-components/validation-message/validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    ValidationMessageComponent,
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
