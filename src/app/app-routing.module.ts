import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductPageComponent } from './pages/product/product.component';
import { BasicFormComponent } from './pages/basic-form/basic-form.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // Det products components as home page
  { path: "", component: ProductsPageComponent, pathMatch: 'full' },
  { path: "products", component: ProductsPageComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "basic-form", component: BasicFormComponent },
  { path: "form-group", component: FormGroupComponent },
  { path: '**', component: NotFoundPageComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
