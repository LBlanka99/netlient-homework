import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "boldMatchesByPercent"
})
export class BoldMatchesByPercentPipe implements PipeTransform {
  transform(value: any, filterBy: string): any {
    if (!isNaN(Number(filterBy))) {
      let percent = Number(filterBy) + "%";
      if (percent == value) {
        return "<span class='highlighted'>" + value + "</span>";
      }
    }
    return value;
  }
}
