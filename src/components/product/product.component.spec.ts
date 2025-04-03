import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

xdescribe('ProductComponent', () => {
  let componentInstance: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    componentInstance = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.componentRef.setInput('product', {
      id: 'ID',
      title: 'TITLE',
      description: 'DESCRIPTION',
      photo: 'PHOTO',
      price: 10,
      stock: 2,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
    const image = nativeElement.querySelector('#mon-image') as HTMLImageElement;
    expect(image?.src).toContain(componentInstance.product().photo);
  });

  it('should display the product description', () => {
    const anchorTexte = nativeElement.querySelector('a')?.textContent;
    expect(anchorTexte).toBe(componentInstance.product().description);
  });

  it('should display the product title', () => {
    const anchorTexte = nativeElement.querySelector('small')?.textContent;
    expect(anchorTexte).toBe(componentInstance.product().title);
  });

  it('should emit addToBasket event with the given product when the button is clicked', () => {
    const emitSpy = spyOn(componentInstance.addToBasket, 'emit');
    nativeElement.querySelector('button')?.click();

    expect(emitSpy).toHaveBeenCalledOnceWith(componentInstance.product());
  });
});
