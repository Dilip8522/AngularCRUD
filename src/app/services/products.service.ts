import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products:any=[
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    category: "Mobile",
    description: "Latest Apple iPhone 15 with A16 chip",
    image: "https://picsum.photos/id/160/400/300"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 69999,
    category: "Mobile",
    description: "Samsung flagship smartphone",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 114999,
    category: "Laptop",
    description: "Apple MacBook Air with M2 chip",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 89999,
    category: "Laptop",
    description: "Dell premium ultrabook",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  }
];
addedProducts:any=[];
  showProducts(){
    return of(this.products);
  }
  addingProduct(d:any){
    this.addedProducts.push(d);
    this.products.push(d);
  }
  addedByUser(){
    return of(this.addedProducts);
  }
  deleteProduct(ind:any){
    var index = this.products.findIndex((x:any)=>x.id==ind);
    if(index!=-1){
      this.products.splice(index,1)
      return "Successfully Deleted"
    }else{
      return "Something Went Wrong"
    }

  }
  updateProduct(obj:any){
    var ind=this.products.findIndex((x:any)=>x.id==obj.id);
    if(ind!=-1){
      this.products.splice(ind,1,obj)
      return "Successfully Updated"
    }else{
      return "Oops Something Went Wrong"
    }
  }
  //For creating cart
  cp:any=[];
  cart(j:any){
    this.cp.push(j);
  }
  cart1(){
    console.log(this.cp)
    return of(this.cp)
  }
}
