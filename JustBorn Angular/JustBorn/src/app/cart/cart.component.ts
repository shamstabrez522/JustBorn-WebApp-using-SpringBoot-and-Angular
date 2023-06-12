import { Component, OnInit } from '@angular/core';
import { JustBornServiceService } from '../just-born-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: any;
  thisUser:any;
  constructor(private jbs:JustBornServiceService,private us:UserService) { }

  ngOnInit(): void {
    this.jbs.getAllCart().subscribe((data:any)=>{
      console.log(data);
      this.order=data;
    });
    this.thisUser=this.jbs.getUser();
    this.us.getAllCart(this.thisUser.u_id).subscribe((data:any)=>{
      console.log(data);
      this.order=data;
    });
  }
  delete(o_id:number){
    console.log(o_id);
    confirm("Are sure want to delete ?");
    this.jbs.deleteCart(o_id).subscribe((data:any)=>{
      this.order=data;
    });
  }

}
