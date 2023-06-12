import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IuproductsComponent } from './iuproducts/iuproducts.component';
import { PayComponent } from './pay/pay.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'header',component:HeaderComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'products',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'userdata',component:UserDataComponent},
  {path:'cart',component:CartComponent},
  {path:'iuproducts',component:IuproductsComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'userpage',component:UserPageComponent},
  {path:'userpage/addtocart',component:AddToCartComponent},
  {path:'pay',component:PayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
