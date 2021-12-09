import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCmsReadComponent } from './shop-cms-read.component';

describe('ShopCmsReadComponent', () => {
  let component: ShopCmsReadComponent;
  let fixture: ComponentFixture<ShopCmsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCmsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCmsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
