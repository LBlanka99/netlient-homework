import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {IProduct} from "./product";
import {Subscription} from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit, OnDestroy{
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  sub!: Subscription;
  errorMessage: string = "";

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err.error
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
