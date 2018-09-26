import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
}) 
export class ArraySortPipe implements PipeTransform {
        transform(array: any[], field: string): any[] {
            array.sort((a: any, b: any) => {
              if (b[field] < a[field]) {
                return -1;
              } else if (b[field] > a[field]) {
                return 1;
              } else {
                return 0;
              }
            });
            return array;
          }
}