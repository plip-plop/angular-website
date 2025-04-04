import { Component, input, output, signal } from '@angular/core';
import { Product } from './product.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = input.required<Product>();
  addToBasket = output<Product>();
  mySignal = signal<number>(0);

  get limitedStock() {
    return this.product().stock <= 1;
  }

  onClick() {
    this.addToBasket.emit(this.product());
  }
}
