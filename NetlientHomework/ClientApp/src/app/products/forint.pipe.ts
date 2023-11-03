import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "forint"
})
export class ForintPipe implements PipeTransform {
  transform(value: any): string {
    if (value.toString().length > 3) {
      value = value.slice(0, -3) + "." + value.slice(-3);
    }
    return value + " Ft";
  }
}
