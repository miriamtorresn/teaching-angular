import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL: string = "https://fakestoreapi.com";

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    // Important! A best practice is that API keys should travel on request headers
    // but it will depend on the API design
    return this.http.get<IProduct[]>(`${this.baseURL}/products`);
  }
}
