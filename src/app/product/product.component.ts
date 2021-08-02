import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchBy:any=[];
  sortBy:any=[];
  sortByName:string='';
  orderBy:string='asc';
  websiteList=[
    {name:'id'},
    {name:'productName'},
    {name:'productPrice'}
  ]
  products: any = []
  producModelObj: Product = new Product()
  showAddUpdate!: boolean;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getAllProducts()
  }
  productForm = this.formBuilder.group({
    productName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]{5,15}$')]],
    productPrice: ['', [Validators.required, Validators.pattern('^[0-9]{5,15}$')]]
  });

  addProduct() {
    this.productForm.reset()
    this.showAddUpdate = true;
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(res => this.products = res);
  }
  saveProduct(productForm: any) {
    this.productService.saveProduct(productForm.value).subscribe(data => { });
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(res => this.products = res);
  }

  editProduct(product: any) {
    this.showAddUpdate = false;
    this.productForm.controls['productName'].setValue(product.productName)
    this.productForm.controls['productPrice'].setValue(product.productPrice)
    this.producModelObj.id = product.id;
  }

  updateProduct() {
    this.producModelObj.productName = this.productForm.value.productName;
    this.producModelObj.productPrice = this.productForm.value.productPrice;
    //this.producModelObj = Object.assign({}, this.productForm.value)
    this.productService.updateProduct(this.producModelObj, this.producModelObj.id).subscribe(data => {
    });
  }
  // sort related code
  changeWebsite(e:any){
    console.log(e.target.value);
    this.sortByName=e.target.value;
  }

}
