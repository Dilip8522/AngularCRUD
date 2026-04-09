import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private dp:Router){}
  username:any;
  password:any;
  reqpass:any;
  adminPass:any;
  loginS(){
    this.adminPass="admin123"
    this.reqpass =this.username.slice(0,3)+"123";
    if(this.password==this.adminPass){
      Swal.fire("Logined to admin");
      localStorage.setItem("loginId",this.username);
      this.dp.navigateByUrl("/menu/addproducts");
    }else if(this.reqpass==this.password){
      Swal.fire("Login Success");
      localStorage.setItem("loginuser",this.username);
      this.dp.navigateByUrl("/user/products");
    }
  }
}
