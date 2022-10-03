import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products.model';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent implements OnInit {

  Products: Product[]=[];
  constructor(private productService: AppServiceService ) { }
  //p = this.productService.getProducts();
  ngOnInit(): void {
    this.productService.getProducts().subscribe((results: Product[])=> (this.Products=results));
  }

}
