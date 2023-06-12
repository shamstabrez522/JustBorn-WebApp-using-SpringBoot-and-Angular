import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EncryptService } from '../encrypt.service';
import { JustBornServiceService } from '../just-born-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userdata: any;
  count: any;
  constructor(private jbs: JustBornServiceService, private route: Router, private EncrDecr: EncryptService) { }

  ngOnInit(): void {
    this.jbs.getAllUserData().subscribe((data: any) => {
      this.userdata = data;
    });
  }
  register(regForm: any) {
    for (let i of this.userdata) {
      this.count = 0;
      if (regForm.u_mailid == i.u_mailid) {
        alert("Already Registered");
        this.route.navigate(['signin']);
        this.count = this.count + 1;
        break;
      }
    }
    if (this.count == 0) {
        var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', regForm.password);
        regForm.password=encrypted;
        console.log(regForm);
        this.jbs.insertData(regForm).subscribe((data: any) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration Successfully Completed',
            showConfirmButton: false,
            timer: 3500
          });
          this.route.navigate(['signin']);
        });
      }
  }




  

  // if (regForm.u_type == "Admin" && regForm.code != "403") {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!\nPlease Check 3 Digit Code',
  //   })
  //   console.log(regForm);
  //   console.log(regForm.code)
  //   this.route.navigate(['signin']);
  // } else {
  //   var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', regForm.password);
  //   regForm.password = encrypted;
  //   console.log(regForm);
  //   this.jbs.insertData(regForm).subscribe((data: any) => {
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'success',
  //       title: 'Registration Successfully Completed',
  //       showConfirmButton: false,
  //       timer: 3500
  //     });
  //     this.route.navigate(['signin']);
  //   })
  // }
}