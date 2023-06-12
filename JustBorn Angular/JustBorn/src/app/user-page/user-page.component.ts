import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JustBornServiceService } from '../just-born-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  product: any;
  public totalProduct: number = 0;

  thisUser: any;
  public cart: any;
  constructor(private jbs: JustBornServiceService, private u: UserService, private activeRoute: ActivatedRoute, private router: Router) {
  }
  refreshPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  ngOnInit(): void {
    this.thisUser = this.jbs.getUser();
    this.u.getProduct().subscribe(res => {
      this.totalProduct = res.length;
    });
    this.jbs.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.product = data;
    });
    this.u.getCartCount(this.thisUser.u_id).subscribe((data: any) => {
      this.totalProduct = data;
    });
    this.u.getAllCart(this.thisUser.u_id).subscribe((data: any) => {
      console.log(data);
      this.cart = data;
      console.log(this.cart);
    });
  }
  searchh(value: any) {
    console.log(value.search);
    this.jbs.searchContains(value.search).subscribe((data: any) => {
      console.log(data);
      this.product = data;
    });
  }
  addtocart(item: any) {
    let i = 0;
    for (; i < this.cart.length; i++) {
      if (this.cart[i].p_id == item.p_id) {
        Swal.fire({
          title: 'Product Already Exists!',
          text: "Do you want to add this?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, add it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Added',
              'Your Product has been added.',
              'success'
            )
            console.log(this.cart[i]);
            this.cart[i].qty++;
            this.jbs.updateCart(this.cart[i]).subscribe((data: any) => {
              console.log(this.cart[i]);
            })
          }
        })
        break;
      }
    }
    if (i == this.cart.length) {
      console.log(item);
      this.jbs.inserCart(item).subscribe((data: any) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Item Addedd to Cart',
          showConfirmButton: false,
          timer: 1000
        })
      });
      this.u.getCartCount(this.thisUser.u_id).subscribe((data: any) => {
        this.totalProduct = data;
      })
    }
  }
  search(value: any) {
    console.log(value);
    this.jbs.searchpi(value).subscribe((data: any) => {
      console.log(data);
      this.product = data;
    })
  }
  success() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate(['']);
        Swal.fire({
          title: 'Thank You',
          text: 'Visit Again 😊',
          imageUrl: '/assets/logo.png',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Custom image',
        })
      }
    })
  }
  searching() {
    this.jbs.searching().subscribe((data: any) => {
      console.log(data);
      this.product = data;
    })
  }
}
