import { TestBed } from '@angular/core/testing';

import { productsService } from './products.service';

describe('ProductsService', () => {
  let service: productsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
