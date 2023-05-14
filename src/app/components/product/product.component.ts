import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from "@angular/router";
import { switchMap, of } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from "../../interfaces/IProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

// Component that display a single product details
export class ProductComponent implements OnInit {
  public product: IProduct | undefined;
  public loading: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  /**
   * NgOnInit is part of the angular lifecycle
   * https://angular.io/api/core/OnInit
   * 
   * Loading product to display
   */
  ngOnInit(): void {
    console.log(this.product);
    this.loading = true;

    this._route.params
      .pipe(
        // route.params is an observable that gives information
        // of current route
        switchMap((params: Params) => {
          const id = params["id"];
          // Switch map let us to change to another observable
          // https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
          // So I'm returning a number observable to use another pipe
          // for getting product id information
          return of(id ? Number(id) : 0);
        }),
        // Now that I got a number as an ID,
        // I'm switching this observable to return product information
        // that is another observable on products service page
        // Note: Parentheses on an arrow function works as a return
        // https://levelup.gitconnected.com/javascript-best-practices-arrow-functions-aefef2517f4
        switchMap((id: number) => (this._productsService.getProduct(id)))
      )
      // Finally I'm suscribing to the product found
      // There is a possibility that the product hasn't been found
      .subscribe ((product: IProduct| undefined) => {
        this.product = product;
        this.loading = false;
      })
  }
}
