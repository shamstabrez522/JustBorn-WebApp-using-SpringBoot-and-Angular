import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JustBornServiceService } from './just-born-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  
  constructor(private httpClient:HttpClient) {
   
   }
  getProduct() {
    return this.productList.asObservable();
  }
  // removeCartItem(product: any) {
  //   this.cartItemList.map((p: any, index: any) => {
  //     if (product.p_id == p.p_id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   })
  // }
  removeAllCart(u_id:any) {
    return this.httpClient.delete("cart/cartByUid/"+u_id);
  }
  getAllCart(u_id:any) {
    return this.httpClient.get("cart/cartlist/"+u_id);
  }
  deleteCart(o_id: number) {
    return this.httpClient.delete("cart/cartlist/" + o_id);
  }
  getCartCount(u_id:any){
    return this.httpClient.get("cart/cartcount/"+u_id);
  }
}

