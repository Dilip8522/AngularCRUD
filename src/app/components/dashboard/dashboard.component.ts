import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
