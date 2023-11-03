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
  codeArrow: string = "fa-arrow-down";
  nameArrow: string = "fa-arrow-down";
  priceArrow: string = "fa-arrow-down";
  taxArrow: string = "fa-arrow-down";

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

  onToggle(arrow: string) {
    return arrow === "fa-arrow-down" ? "fa-arrow-up" : "fa-arrow-down";
  }
}
