import { Component, computed, signal } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../components/product/product.types';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my first component';
  total = signal<number>(0);

  products = signal<Product[]>([
    {
      id: 'welsch',
      title: 'Coding the welsch',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-welsch.jpg',
      price: 2000,
      stock: 2,
    },
    {
      id: 'world',
      title: 'Coding the world',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-world.jpg',
      price: 18,
      stock: 1,
    },
    {
      id: 'vador',
      title: 'Duck Vador',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-stars.jpg',
      price: 21,
      stock: 2,
    },
    {
      id: 'snow',
      title: 'Coding the snow',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-snow.jpg',
      price: 19,
      stock: 2,
    },
  ]);

  hasProductsInStock = computed<boolean>(() =>
    this.products().some(({ stock }) => stock > 0)
  );

  ajouterAuPanier({ id, price }: Product) {
    this.products.update((products) =>
      products.map((product) => {
        if (product.id === id) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );

    this.total.update((total) => total + price);
  }
}
