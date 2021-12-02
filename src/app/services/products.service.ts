import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root',
})
export class productsService {
  private flowerUrl = 'http://192.168.64.2/flowershop-API/api-get.php';
  static getAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  getAlls(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.flowerUrl)
      .pipe(tap((data) => JSON.stringify(data)));
  }

  getAll(id: number): Observable<Product | undefined> {
    return this.getAlls().pipe(
      map((product: Product[]) => product.find((product) => product.id == id))
    );
  }
}
