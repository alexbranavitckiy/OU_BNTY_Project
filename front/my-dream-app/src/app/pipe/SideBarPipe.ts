import {Pipe, PipeTransform} from "@angular/core";



@Pipe({
  name: 'FormatPipe2'
})
export class SideBarPipe implements PipeTransform{
  transform(value: number, args?: any): string {

    return value.toString().replace(".", ",");
  }
}
