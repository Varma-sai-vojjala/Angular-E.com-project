import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  mockUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  saveProduct(product: any) {
    return this.http.post(this.mockUrl, product);
  }
  getAllProducts() {
    return this.http.get(this.mockUrl);
  }
  deleteProduct(id: Number) {
    return this.http.delete(this.mockUrl + '/' + id);
  }
  updateProduct(product: any, id: number) {
    console.log(product)
    console.log(id)
    return this.http.put(this.mockUrl + '/' + id, product);
  }
}
