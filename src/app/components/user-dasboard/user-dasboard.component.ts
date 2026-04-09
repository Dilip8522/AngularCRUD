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
      localStorage.removeItem("loginId");
      this.dp.navigateByUrl("/")
    }
    ngOnInit(){
      if(localStorage.getItem("loginId")){
        this.username=localStorage.getItem("loginId");
      }else{
        this.dp.navigateByUrl("/");
      }
    }
}
