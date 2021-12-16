import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CustomerDisplay } from '../models/customer-display';

@Injectable({
  providedIn: 'root',
})
export class customerDisplayService {
  private customerDisplayUrl =
    'http://192.168.64.2/flowershop-API/api-get-customer.php';
  static getAll() {
    throw new Error('Method not implemented');
  }
  constructor(private http: HttpClient) {}
  getAlls(): Observable<CustomerDisplay[]> {
    return this.http
      .get<CustomerDisplay[]>(this.customerDisplayUrl)
      .pipe(tap((data) => JSON.stringify(data)));
  }
}
