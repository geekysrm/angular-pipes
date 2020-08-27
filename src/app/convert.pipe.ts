import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return ''; //to remove NaN when value(miles) is undefined at the start
    }

    return value * 1.609;
  }
}
