import { Pipe, PipeTransform } from '@angular/core';
import { interval, timeInterval } from 'rxjs';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return (value + "%");
  }

}
