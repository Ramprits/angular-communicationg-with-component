import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductService } from './components/product/product.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'addProduct', component: AddProductComponent },
  ])],
  declarations: [AppComponent, NavbarComponent, HomeComponent, ProductComponent, AddProductComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
