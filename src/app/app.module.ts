import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductPageComponent } from './pages/product/product.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsPageComponent,
    ProductCatalogComponent,
    ProductPageComponent,
    NotFoundPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
