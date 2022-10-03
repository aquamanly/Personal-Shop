import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAddComponent } from './Components/products-add/products-add.component';
import { ProductsShowComponent } from './Components/products-show/products-show.component';
import { ProductsEditComponent } from './Components/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsAddComponent,
    ProductsShowComponent,
    ProductsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
