import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { UserDasboardComponent } from './components/user-dasboard/user-dasboard.component';
import { UserproductsComponent } from './components/userproducts/userproducts.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:DashboardComponent,
    children:[
      {path:'addproducts',component:AddProductsComponent},
      {path:'viewproducts',component:ViewProductsComponent},
      {path:'manage',component:ManageProductsComponent}
    ]
  },
  {path:'user',component:UserDasboardComponent,
    children:[
      {path:'products',component:UserproductsComponent},
      {path:'profile',component:ProfileComponent},
      {path:'cart',component:CartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
