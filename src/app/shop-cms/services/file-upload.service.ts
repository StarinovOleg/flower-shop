import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  SERVER_URL: string = 'https://file.io/';
  constructor(private http: HttpClient) {}
  public upload(formData: any) {
    return this.http.post<any>(this.SERVER_URL, formData);
  }
}
