import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "forint"
})
export class ForintPipe implements PipeTransform {
  transform(value: any): string {
    return new Intl.NumberFormat("hu-HU", {style: "currency", currency: "HUF", maximumFractionDigits: 0}).format(value);
  }
}
