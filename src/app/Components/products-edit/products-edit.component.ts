import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products.model';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getIdService: AppServiceService, private router: Router) { }
  editProduct: Product = {
    pId: "",
    pIsInStock: false,
    pCategory: "",
    pName: "",
    pPrice: ""
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id =  params.get('id');

        if (id) {
          this.getIdService.getProductById(id).subscribe({
            next: (response) => {
              this.editProduct = response;
              console.log(response);
            }
          })
        }
      }
    })
  }

/**
 * updateProduct
 */
public updateProduct() {
  console.log(this.editProduct);
  this.getIdService.updateProduct(this.editProduct.pId, this.editProduct).subscribe({
    next: (response) => {
      console.log("done");
    }
  })
}
/**
 * delProduct
 */
public delProduct(id:string) {
  this.getIdService.deleteProduct(id).subscribe({
    next: (response) => {
      this.router.navigate(['show']);
    }
  })
}
}
