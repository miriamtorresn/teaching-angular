import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../../interfaces/IProduct";
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _baseURL: string = "https://fakestoreapi.com";
  private _productsList: IProduct[] = [];

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Get the list of products
   * If the response is cached we can use it,
   * otherwise, we make the API call to retreive data.
   * 
   * @returns Observable<IProduct[]>
   */
  getProducts(): Observable<IProduct[]> {
    // Caching results for lower API calls
    if (this._productsList.length >= 1 ) {
      // Of function in RxJS converts something into an observable
      // So we're returning the products list we have stored
      // as an observable to avoid calling the API again
      return of(this._productsList);
    }
    // Returning whatever get method of the _http service (lives within the http module of Angular)
    // gives to me based on parenthesis request
    // <> lets you know what kind of data are you trying to get from the API
    return this._http.get<IProduct[]>(`${this._baseURL}/products`) // This is an observable
      .pipe(
        map(
          (products => {
            this._productsList = products;
            return products;
          })
        )
      );
  }


  /**
   * Looks for an specific products within the products
   * list and returns its value.
   * 
   * @param id number
   * @returns Observable<IProduct | undefined>
   */
  getProduct(id: number): Observable<IProduct | undefined> {
    // Getting product list to find an specific product
    // IMPORTANT: This can be replaced to get data directly from an API
    // to get full data of an specific product.
    return this.getProducts()
      .pipe(
        // Note: Parentheses on an arrow function works as a return
        // https://levelup.gitconnected.com/javascript-best-practices-arrow-functions-aefef2517f4
        map((products: IProduct[]) => (products.find((product) => (product.id === id))))
      );
  }
}
