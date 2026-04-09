import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrl: './userproducts.component.css'
})
export class UserproductsComponent {
  constructor(private data:ProductsService){}
    products:any;
    ngOnInit(){
     this.data.showProducts().subscribe((res)=>{
      this.products=res;
     })
    }
    //adding to cart
    addedProduct:any=[];
   addtocart(obj:any){
    this.addedProduct.push(obj);
    this.data.cart(this.addedProduct)
   }
}
