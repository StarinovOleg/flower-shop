import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorldOrderComponent } from './header-world-order.component';

describe('HeaderWorldOrderComponent', () => {
  let component: HeaderWorldOrderComponent;
  let fixture: ComponentFixture<HeaderWorldOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWorldOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWorldOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
