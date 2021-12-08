import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCmsComponent } from './shop-cms.component';

describe('ShopCmsComponent', () => {
  let component: ShopCmsComponent;
  let fixture: ComponentFixture<ShopCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
