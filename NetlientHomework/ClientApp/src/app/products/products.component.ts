import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {IProduct} from "./product";
import {Subscription} from "rxjs";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit, OnDestroy{
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  sub!: Subscription;
  errorMessage: string = "";
  codeArrow:boolean = false;
  nameArrow:boolean = false;
  priceArrow:boolean = false;
  taxArrow:boolean = false;

  private _filterBy = "";
  get filterBy(): string {
    return this._filterBy;
  }
  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredProducts = this.filterProducts(value);
  }

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

  onSortBy(column: string) {
    switch (column) {
      case "code":
        this.codeArrow = !this.codeArrow;
        this.products = this.sortByColumn("itemNumber", this.codeArrow);
        this.filteredProducts = this.sortByColumn("itemNumber", this.codeArrow);
        break;
      case "name":
        this.nameArrow = !this.nameArrow;
        this.products = this.sortByColumn("itemName", this.nameArrow);
        this.filteredProducts = this.sortByColumn("itemName", this.nameArrow);
        break;
      case "price":
        this.priceArrow = !this.priceArrow;
        this.products = this.sortByColumn("netPrice", this.priceArrow);
        this.filteredProducts = this.sortByColumn("netPrice", this.priceArrow);
        break;
      case "tax":
        this.taxArrow = !this.taxArrow;
        this.products = this.sortByColumn("tax", this.taxArrow);
        this.filteredProducts = this.sortByColumn("tax", this.taxArrow);
        break;
      default:
        break;
    }
  }

  sortByColumn(columnName: string, descending: boolean) {
    return this.filteredProducts.sort((a, b) => {
      if (a[columnName] < b[columnName]) {
        return descending ? 1 : -1;
      }
      if (a[columnName] > b[columnName]) {
        return descending ? -1 : 1;
      }
      return 0;
    });
  }

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product => product.itemName.toLowerCase().includes(filterBy) || product.itemNumber.toString().includes(filterBy) || product.netPrice.toString().includes(filterBy) || product.tax.toString().includes(filterBy)));
  }

  exportToPDF() {
    const documentDefinition = {
      content: [
        `Results for search term: '${this.filterBy}'\n\n`,
        {
          table: {
            headerRows: 1,
            widths: ["auto", "auto", "auto", "auto"],
            body: [
              ["Code", "Product", "Price", "Tax"],
              ...this.filteredProducts.map((product) => [
                product.itemNumber,
                product.itemName,
                product.netPrice,
                product.tax,
              ]),
            ],
          },
        },
      ],
    };

    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  }


}
