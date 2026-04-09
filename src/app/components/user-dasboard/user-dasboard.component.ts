import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrl: './user-dasboard.component.css'
})
export class UserDasboardComponent {
  constructor(private dp:Router){}
    username:any;
    logouts(){
      localStorage.removeItem("loginuser");
      this.dp.navigateByUrl("/")
    }
    ngOnInit(){
      if(localStorage.getItem("loginuser")){
        this.username=localStorage.getItem("loginuser");
      }else{
        this.dp.navigateByUrl("/");
      }
    }
}
