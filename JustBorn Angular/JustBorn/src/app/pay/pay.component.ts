import { Component, OnInit } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { JustBornServiceService } from '../just-born-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private jbs:JustBornServiceService,private u:UserService) { }
  finalAmount:any;
  customerinfo:any;
  totalProduct:number=0;
  ngOnInit(): void {
    this.finalAmount=this.jbs.getAmount();
    this.customerinfo=this.jbs.getUser();
    this.u.getCartCount(this.customerinfo.u_id).subscribe((data:any)=>{
      this.totalProduct=data;
    })
  }
  
  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Just Born Ltd.",
    "description": "Test Transaction",
    "image": "/assets/logo.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://goodluckhours.com/payment-successful/",
    "prefill": {
        "name": this.jbs.userDetails.u_name,
        "email": this.jbs.userDetails.u_mailid,
        "contact": this.jbs.userDetails.u_phone,
    },
    "notes": {
        "address": "Head Office Address, PSR PrimeTowers, Survey No 126P, DLF Road, Beside DLF Cyber City, Gachibowli, Hyderabad, Telangana 500032."
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.jbs.nativeWindow.Razorpay(this.options);
  this.rzp1.open(); 
    
}
}
