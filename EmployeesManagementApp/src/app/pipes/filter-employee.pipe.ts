import { Employee } from './../models/employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployee',
})
export class FilterEmployeePipe implements PipeTransform {
  transform(value: Employee[], filterValue: string): unknown {
    if (value && value.length > 0) {
      if (!filterValue) return value;
      return value.filter(
        (v) =>
          v.FirstName.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
          v.SecondName.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
          v.Position.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
      );
    } else {
      return value;
    }
  }
}
