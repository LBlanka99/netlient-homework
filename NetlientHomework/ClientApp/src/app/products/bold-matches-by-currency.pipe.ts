import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "boldMatchesByCurrency"
})
export class BoldMatchesByCurrencyPipe implements PipeTransform {
  transform(value: string, filterBy: string): string {
    if (!isNaN(Number(filterBy))) {
      let num: string = Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: "HUF",
        maximumFractionDigits: 0
      }).format(Number(filterBy));

      if (num == value) {
        return "<span class='highlighted'>" + value + "</span>"
      }

    }
    return value;
  }
}
