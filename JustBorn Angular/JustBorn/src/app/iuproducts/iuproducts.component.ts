import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JustBornServiceService } from '../just-born-service.service';

@Component({
  selector: 'app-iuproducts',
  templateUrl: './iuproducts.component.html',
  styleUrls: ['./iuproducts.component.css']
})
export class IuproductsComponent implements OnInit {

  constructor(private jbs:JustBornServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  register(regForm:any){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(regForm);
    this.jbs.insertproduct(regForm).subscribe((data:any)=>{
      this.route.navigate(['products']);
    })
  }

}
