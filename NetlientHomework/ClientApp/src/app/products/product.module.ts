import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsComponent} from "./products.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "products", component: ProductsComponent}
    ]),
    FormsModule
  ]
})
export class ProductModule {

}
