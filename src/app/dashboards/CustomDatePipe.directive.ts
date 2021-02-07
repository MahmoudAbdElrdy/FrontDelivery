import { Pipe, PipeTransform } from '@angular/core';
   import { DatePipe } from '@angular/common';
@Pipe({
  name: 'CustomDatePipe'
})
export class CustomDatePipeDirective extends 
DatePipe implements PipeTransform {
transform(value: any, args?: any): any {
  return super.transform(value, 'dd/MM/yyy');
}
}