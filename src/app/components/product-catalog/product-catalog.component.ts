import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(
    private ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.ProductsService.getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }
}
