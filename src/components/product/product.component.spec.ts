import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
    // TODO
  });

  it('should display the product description', () => {
    // TODO
  });

  it('should display the product title', () => {
    // TODO
  });

  it('should display the product price', () => {
    // TODO
  });

  it('should emit addToBasket event with the given product when the button is clicked', () => {
    // TODO
  });

  it('should display the products', () => {
    // TODO
  });

  it('should update the total when "addToBasket" class method is called (Class testing)', () => {
    // TODO
  });
});
