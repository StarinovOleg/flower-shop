import { Injectable } from '@angular/core';
import { ProductAdd } from '../models/products-add';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductAddService {
  constructor(private http: HttpClient) {}
  private productAddUrl =
    'http://192.168.64.2/flowershop-API/api-product-add.php';
  addProduct(productAdd: ProductAdd): Observable<ProductAdd> {
    let body = JSON.stringify(productAdd);
    return this.http.post(this.productAddUrl, body);
  }
}
