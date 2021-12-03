import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  private customerUrl = 'http://192.168.64.2/flowershop-API/api-customer.php';
  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.customerUrl, 'customer');
  }
}
