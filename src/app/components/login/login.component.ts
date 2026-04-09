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
  loginS(){
    this.reqpass =this.username.slice(0,3)+"123";
    if(this.reqpass==this.password){
      alert("login success");
      localStorage.setItem("loginId",this.username);
      this.dp.navigateByUrl("/menu/addproducts");
    }else{
      Swal.fire("Login Success")
    }
  }
}
