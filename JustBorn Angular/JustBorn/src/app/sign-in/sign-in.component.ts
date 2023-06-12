import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EncryptService } from '../encrypt.service';
import { JustBornServiceService } from '../just-born-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signin: any;
  emailTest: boolean=false;
  constructor(private router: Router, private jbs: JustBornServiceService,private EncrDecr:EncryptService) { }
  ngOnInit(): void {
    this.jbs.getAllUserData().subscribe((data: any) => {
      this.signin = data;
      console.log(data)
    });
  }

  login(loginForm: any) {
    console.log(loginForm);
    let i = 0; 
    for (i = 0; i < this.signin.length; i++) {
      console.log(this.signin[i]);
      if (loginForm.un == this.signin[i].u_mailid && loginForm.pw == this.EncrDecr.get('123456$#@$^@1ERF', this.signin[i].password)) {
        if (this.signin[i].u_type == "Admin") {
          this.jbs.userLogged = true;
          Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: this.signin[i].u_name+' Login Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.jbs.setUser(this.signin[i]);
          this.router.navigate(['header']);
        } else {
          this.jbs.userLogged = true;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐉𝐮𝐬𝐭 𝐁𝐨𝐫𝐧 𝐅𝐚𝐦𝐢𝐥𝐲'+"  "+this.signin[i].u_name,
            showConfirmButton: false,
            timer: 1500
          });
          this.jbs.setUser(this.signin[i]);
          this.router.navigate(['userpage']);
        } break;
      }
    } 
    if (i == this.signin.length)
    Swal.fire({
      icon: 'error',
      title: 'Invalid Username & Password',
      text: 'Check Once!',
      // footer: '<button onclick="withoutread()" class="btn btn-info">Test</button>'
    })
  }
}