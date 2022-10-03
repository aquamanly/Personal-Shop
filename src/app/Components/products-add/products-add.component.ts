import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products.model';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  addProduct: Product = {
    pId: "",
    pIsInStock: false,
    pCategory: "",
    pName: "",
    pPrice: ""
  }
  //constructor(private productService: AppServiceService, private router: Router) { }
  constructor(private productService: AppServiceService) { }
  ngOnInit(): void {
  }

  /**
   * addProductFunction
   */
  public addProductFunction() {
    this.productService.addProductsApi(this.addProduct).subscribe({
      next: (product) => console.log(product)
      //next:(product) => this.router.navigate(['show']);
    })
  }
 

}
