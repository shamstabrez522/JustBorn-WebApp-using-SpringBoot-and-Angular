import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JustBornServiceService } from '../just-born-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  thisUser:any;
  public cart:any;
  grandTotal :any; 
  constructor(private us:UserService,private jbs:JustBornServiceService,private router:Router){
    this.grandTotal=0;
  }
  ngOnInit(): void {
    this.thisUser=this.jbs.getUser();
    this.us.getAllCart(this.thisUser.u_id).subscribe((data:any)=>{
      this.cart=data;
      this.grandTotal=0;
      console.log(this.cart)
      this.cart.forEach((element:any) => {
          this.grandTotal+=(element.p_price*element.qty);
      });
      this.grandTotal= this.grandTotal.toFixed(2);
      this.jbs.setAmount(this.grandTotal);
    })
  }
  updateqty(p:any){
    this.jbs.updateCart(p).subscribe((data:any)=>{
      this.ngOnInit();
    })
  }
  removeproduct(product:any){
    this.us.deleteCart(product.o_id).subscribe((data:any)=>{
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Removed From Cart',
        showConfirmButton: false,
        timer: 1500
      })
      this.ngOnInit();
    });
  }
  emptycart(){
    this.us.removeAllCart(this.thisUser.u_id).subscribe((data:any)=>{
      console.log(data);
      this.thisUser.grandTotal=0;
    });
  }
//   options = {
//     "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
//     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Just Born Ltd.",
//     "description": "Test Transaction",
//     "image": "/assets/logo.png",
//     "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "callback_url": "https://goodluckhours.com/payment-successful/",
//     "prefill": {
//         "name": this.jbs.userDetails.u_name,
//         "email": this.jbs.userDetails.u_mailid,
//         "contact": this.jbs.userDetails.u_phone,
//     },
//     "notes": {
//         "address": "Head Office Address, PSR PrimeTowers, Survey No 126P, DLF Road, Beside DLF Cyber City, Gachibowli, Hyderabad, Telangana 500032."
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// };
// rzp1:any;
// pay(total:any){
//   this.options.amount=total;
//   this.rzp1 = new this.jbs.nativeWindow.Razorpay(this.options);
//   this.rzp1.open(); 
    
// }
pay(){
  this.router.navigate(['/pay']);
}
}
//
