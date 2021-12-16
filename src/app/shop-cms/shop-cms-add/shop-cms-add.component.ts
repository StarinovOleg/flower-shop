import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductAddService } from '../services/products-add.service';
import { ProductAdd } from '../models/products-add';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';
import { ReactiveFormsModule } from '@angular/forms';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-cms-add',
  templateUrl: './shop-cms-add.component.html',
  styleUrls: ['./shop-cms-add.component.scss'],
})
export class ShopCmsAddComponent implements OnInit {
  constructor(
    private ProductAddService: ProductAddService,
    private FileUploadService: FileUploadService
  ) {}
  productAdd: ProductAdd = new ProductAdd();
  form!: FormGroup;
  result: string | undefined;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
  }
  onSubmit(): void {
    this.result = 'success';

    this.ProductAddService.addProduct(this.productAdd).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
