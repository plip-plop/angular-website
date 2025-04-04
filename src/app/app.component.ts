import { Component, inject } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../components/product/product.types';
import { BasketService } from '../services/basket.service';
import { BasketItem } from '../services/basket.types';
import { CatalogService } from '../services/catalog.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, ProductComponent, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private catalogService = inject(CatalogService);
  private basketService = inject(BasketService);

  title = 'my first component';
  total = this.basketService.total;

  products = this.catalogService.products;

  hasProductsInStock = this.catalogService.hasProductsInStock;

  ajouterAuPanier(produit: Product) {
    this.catalogService.decreaseStock(produit.id);

    const item: BasketItem = {
      id: produit.id,
      title: produit.title,
      price: produit.price,
    };

    this.basketService.addItem(item);
  }
}
