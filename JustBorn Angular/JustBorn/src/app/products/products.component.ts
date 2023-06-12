import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { JustBornServiceService } from '../just-born-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: any;
  updateData: any;
  constructor(private jbs: JustBornServiceService,private toaster:NgToastService,private activeRoute: ActivatedRoute,private router:Router) {
    this.product = "";
    this.updateData = {
      p_id: "",
      p_name: "",
      c_id: "",
      bage: "",
      p_price: "",
      p_desc: ""
    }
  }
  refreshPage() {
    let currentUrl = this.router.url;
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
   this.router.navigate([currentUrl]);
   });
   }
  ngOnInit(): void {
    this.jbs.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.product = data;
    });
  }
  search(value: any) {
    console.log(value.search);
    this.jbs.searchpi(value.search).subscribe((data: any) => {
      console.log(data);
      this.product = data;
    });
  }
  update(u1: any) {
    this.updateData = u1;
  }
  editProduct(u2: any) {
    this.jbs.updateproduct(u2).subscribe((data: any) => {
      console.log(data);
    })
  }
  delete(p_id: number) {
    console.log(p_id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.jbs.deleteProduct(p_id).subscribe((data: any) => {
          this.product = data;
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
  }


  style() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
  success(){
    Swal.fire({
      title: 'Thank You',
      text: 'Visit Again 😊',
      imageUrl: '/assets/logo.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Custom image',
    })
  }
}
