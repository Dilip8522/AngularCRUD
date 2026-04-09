import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private data:ProductsService){}
    username:any=localStorage.getItem("loginId");
    products:any;
    ngOnInit(){
      this.data.cart1().subscribe((res)=>{
        this.products=res;
      })
    }
}
