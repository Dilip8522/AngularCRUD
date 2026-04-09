import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private data:ProductsService){}
  username:any=localStorage.getItem("loginId");
  products:any;
  
  ngOnInit(){
    this.data.addedByUser().subscribe((res)=>{
      this.products=res;
    })
  }

}
