import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "boldMatches"
})
export class BoldMatchesPipe implements PipeTransform {
  transform(value: string, filterBy: string): string {
    filterBy = filterBy.toLowerCase();
    if (filterBy != "") {
      const foundIndex = value.toLowerCase().indexOf(filterBy);

      if (foundIndex > -1) {
        return value.slice(0, foundIndex) +
          "<span class='highlighted'>" +
          value.slice(foundIndex, foundIndex+filterBy.length) +
          "</span>" +
          value.slice(foundIndex+filterBy.length);
      }
    }
    return value;
  }
}
