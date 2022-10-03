import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductsShowComponent } from './Components/products-show/products-show.component';
import { ProductsEditComponent } from './Components/products-edit/products-edit.component';
import { ProductsAddComponent } from './Components/products-add/products-add.component';

const routes: Routes = [
  {path: 'add', component: ProductsAddComponent},
  {path: 'show', component: ProductsShowComponent},
  {path: 'show/edit/:id', component:ProductsEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
