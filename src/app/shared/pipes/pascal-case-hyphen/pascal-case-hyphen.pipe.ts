import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCaseHyphen'
})
export class PascalCaseHyphenPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split('-');
    values = values.map((item: any) => item.charAt(0).toUpperCase() + item.slice(1));
    return values.join(' ');
  }

}
