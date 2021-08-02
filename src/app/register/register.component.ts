import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  data:any = []

  constructor(private productService: ProductsService) { }

  userForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z]{5,15}$'),
    ]),
  });

  saveProduct(userForm:any) {
     this.productService.saveProduct(userForm.value).subscribe(data => this.data = data);
  }


}
