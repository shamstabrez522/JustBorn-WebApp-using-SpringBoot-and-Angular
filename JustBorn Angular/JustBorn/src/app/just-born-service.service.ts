import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
function _window():any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class JustBornServiceService {
  amount:any;
  value:any;
  userLogged: boolean;
  cart: any;
  userDetails:any;
  constructor(private httpClient: HttpClient) {
    this.userLogged = false;
    this.cart = {
      o_id: 0,
      p_img:"",
      p_name: "",
      p_id: "",
      u_id: "",
      u_name: "",
      u_phone: "",
      qty:"",
      p_price: ""
    }
  }
  setuserLogged() {
    this.userLogged = true;
  }
  getuserLogged() {
    return this.userLogged;
  }
  setUser(userDetails:any){
    this.userDetails=userDetails;
  }
  getUser(){
    return this.userDetails;
  }
  setAmount(amount:any){
    this.amount=amount;
  }
  getAmount(){
    return this.amount;
  }
  // products
  getAllProducts() {
    return this.httpClient.get("/products/productslist");
  }
  getbyProduct_id(p_id: number){
      return this.httpClient.get("/products/productslist/"+p_id);
  }

  searchContains(data:any){
    return this.httpClient.get("/products/contains/"+data);
  }
  insertproduct(products: any) {
    return this.httpClient.post("/products/productslist", products);
  }
  updateproduct(products: any) {
    return this.httpClient.put("/products/productslist/", products);
  }
  deleteProduct(p_id: number) {
    return this.httpClient.delete("/products/productslist/" + p_id);
  }
  searchpi(products: any) {
    console.log(products);
    return this.httpClient.get("/products/search/" + products);
  }
  searching(){
    return this.httpClient.get("/products/any");
  }
  //categories
  getAllCategories() {
    return this.httpClient.get("/categories/categorieslist");
  }
  deleteCategories(c_id: number) {
    return this.httpClient.delete("/categories/categorieslist/" + c_id);
  }
  //userdata
  getAllUserData() {
    return this.httpClient.get("/userdata/userdatalist");
  }
  deleteUserData(u_id: number) {
    return this.httpClient.delete("/userdata/userdatalist/" + u_id);
  }
  insertData(userdata:any){
    return this.httpClient.post("/userdata/userdatalist",userdata)
  }
  searchud(userdata: any) {
    console.log(userdata);
    return this.httpClient.get("/userdata/search/" + userdata);
  }
  updateuser(userdata: any) {
    return this.httpClient.put("/userdata/userdatalist/", userdata);
  }
  //cart
  getAllCart() {
    return this.httpClient.get("/cart/cartlist");
  }
  deleteCart(o_id: number) {
    return this.httpClient.delete("/cart/cartlist/" + o_id);
  }
  updateCart(cart:any){
    return this.httpClient.put("cart/cartlist",cart);
  }
  inserCart(item:any){
    console.log(item);
    this.cart.p_name=item.p_name;
    this.cart.p_id=item.p_id;
    this.cart.p_img=item.p_img;
    this.cart.qty=1;
    this.cart.p_price=item.p_price;
    console.log(this.userDetails.u_id)
    console.log(this.userDetails)
    this.cart.u_id=this.userDetails.u_id;
    console.log(this.cart.uid)
    this.cart.u_name=this.userDetails.u_name;
    this.cart.u_phone=this.userDetails.u_phone;
    console.log(this.cart);
    return this.httpClient.post("cart/cartlist",this.cart);
  }
  
  get nativeWindow() : any{
    return _window();
  }
}
