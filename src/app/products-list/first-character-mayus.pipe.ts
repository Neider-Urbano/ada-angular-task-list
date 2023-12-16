import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharacterMayus',
})
export class FirstCharacterMayusPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) '';
    return value.slice(0, 1).toLocaleUpperCase() + value.slice(1);
  }
}
