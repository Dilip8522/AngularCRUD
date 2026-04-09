import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  productsForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private dp:ProductsService){
    this.productsForm=this.fb.group({
      id:['',Validators.required],
    name:['',Validators.required],
    price:['',Validators.required],
    category:['',Validators.required],
    description:[''],
    image:['',Validators.required],
    })
  }

  addNew(){
    this.dp.addingProduct(this.productsForm.value);
    this.productsForm.reset();
    Swal.fire("Successfully Added");
  }
}
