import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  constructor(private data:ProductsService){}
  products:any;
  ngOnInit(){
   this.data.showProducts().subscribe((res)=>{
    this.products=res;
   })
  }
}
