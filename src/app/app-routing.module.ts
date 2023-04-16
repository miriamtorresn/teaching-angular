import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductPageComponent } from './pages/product/product.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // Det products components as home page
  { path: "", component: ProductsPageComponent, pathMatch: 'full' },
  { path: "products", component: ProductsPageComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: '**', component: NotFoundPageComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
