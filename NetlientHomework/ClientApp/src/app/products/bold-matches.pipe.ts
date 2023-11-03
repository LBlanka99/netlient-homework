import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "boldMatches"
})
export class BoldMatchesPipe implements PipeTransform {
  transform(value: any, filterBy: string): string {
    filterBy = filterBy.toLowerCase();
    if (filterBy != "") {
      const foundIndex = value.toString().toLowerCase().indexOf(filterBy);
      if (foundIndex > -1) {
        return value.toString().slice(0, foundIndex) + "<span class='highlighted'>" + value.toString().slice(foundIndex, foundIndex+filterBy.length) + "</span>" + value.toString().slice(foundIndex+filterBy.length);
      }
    }
    return value.toString();
  }
}
