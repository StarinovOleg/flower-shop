import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCmsAddComponent } from './shop-cms-add.component';

describe('ShopCmsAddComponent', () => {
  let component: ShopCmsAddComponent;
  let fixture: ComponentFixture<ShopCmsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCmsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCmsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
