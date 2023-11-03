import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    const apiAddress = "https://localhost:7181/api/v1/products";
    return this.httpClient.get<IProduct[]>(apiAddress);
  }

}
