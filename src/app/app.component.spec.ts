import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let componentInstance: AppComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).overrideComponent(AppComponent, {
      remove: {
        imports: [ProductComponent],
      },
      add: {
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      },
    });

    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should display the products', () => {
    const productDebugElements = fixture.debugElement.queryAll(
      By.css('app-product')
    );

    productDebugElements.forEach((productElement, index) =>
      expect(productElement.properties['product']).toBe(
        componentInstance.products[index]
      )
    );
  });

  it('should update the total when "addToBasket" class method is called (Class testing)', () => {
    componentInstance.total = 100;
    componentInstance.ajouterAuPanier(componentInstance.products[0]);
    expect(componentInstance.total).toBe(
      100 + componentInstance.products[0].price
    );
  });
});
