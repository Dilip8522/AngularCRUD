import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  constructor(private data:ProductsService){}
    products:any;
    ngOnInit(){
     this.data.showProducts().subscribe((res)=>{
      this.products=res;
     })
    }
    result:any;
    deleteNow(ind:any){
      this.result = this.data.deleteProduct(ind);
      Swal.fire(this.result);
    }
    dummy={
      id: '',
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
    }
    updateNow(obj:any){
      this.dummy=obj;
      console.log(this.dummy)
    }
    updateProductNow(){
      this.result=this.data.updateProduct(this.dummy);
      Swal.fire(this.result)
    }

}
