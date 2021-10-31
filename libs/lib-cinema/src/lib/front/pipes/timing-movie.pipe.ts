import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration } from 'date-fns';
import { addMinutes } from 'date-fns/esm';
import { es } from 'date-fns/esm/locale';

@Pipe({
  name: 'timingMovie'
})
export class TimingMoviePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const helperDate = addMinutes(new Date(0), value);
    return formatDuration(
      { hours: helperDate.getHours(), minutes: helperDate.getMinutes() },
      { format: ['hours', 'minutes'], locale: es }
    );
  }
}
