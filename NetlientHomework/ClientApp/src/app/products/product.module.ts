import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsComponent} from "./products.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BoldMatchesPipe} from "./bold-matches.pipe";
import {ForintPipe} from "./forint.pipe";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    ProductsComponent,
    BoldMatchesPipe,
    ForintPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "products", component: ProductsComponent, canActivate: [AuthGuard]}
    ]),
    FormsModule
  ]
})
export class ProductModule {

}
