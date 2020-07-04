import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: any[],
    propertyName: string,
    order: string = 'asc'
  ): unknown {
    if (value && value.length > 1) {
      if (propertyName) {
        if (order == 'asc') {
          return value.sort((a: any, b: any) =>
          a[propertyName].localeCompare(b[propertyName])
        );
        } else {
          return value.sort((a: any, b: any) =>
            b[propertyName].localeCompare(a[propertyName])
          );
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
