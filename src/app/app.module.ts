import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { UserDasboardComponent } from './components/user-dasboard/user-dasboard.component';
import { UserproductsComponent } from './components/userproducts/userproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ProfileComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ManageProductsComponent,
    UserDasboardComponent,
    UserproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
