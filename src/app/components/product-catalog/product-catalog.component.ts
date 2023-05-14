import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})

// Component that displays product list
export class ProductCatalogComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(
    private _productsService: ProductsService
  ) {}

  /**
   * NgOnInit is part of the angular lifecycle
   * https://angular.io/api/core/OnInit
   * 
   * Loading products from catalog
   */
  ngOnInit(): void {
    this._productsService.getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }
}
