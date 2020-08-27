import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): unknown {
    // ...args: unknown[]: args is an array of all the arguments being passed from the template

    if (!value) {
      return ''; //to remove NaN when value(miles) is undefined at the start
    }

    switch (targetUnits) {
      case 'm':
        return value * 1.6093 * 1000;
      case 'km':
        return value * 1.6093;
      default:
        throw new Error('Target Unit not supported');
    }
  }
}
