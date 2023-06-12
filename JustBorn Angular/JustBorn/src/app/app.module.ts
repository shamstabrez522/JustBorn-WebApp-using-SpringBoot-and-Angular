import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CartComponent } from './cart/cart.component';
import { IuproductsComponent } from './iuproducts/iuproducts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GenderPipe } from './gender.pipe';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NgToastModule } from 'ng-angular-popup'
import { EncryptService } from './encrypt.service';
import { TotalPipe } from './total.pipe';
import { PayComponent } from './pay/pay.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ProductsComponent,
    CategoriesComponent,
    UserDataComponent,
    CartComponent,
    IuproductsComponent,
    HomePageComponent,
    GenderPipe,
    AddToCartComponent,
    UserPageComponent,
    TotalPipe,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [EncryptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
