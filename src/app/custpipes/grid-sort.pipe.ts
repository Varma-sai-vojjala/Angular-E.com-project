import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridSort'
})
export class GridSortPipe implements PipeTransform {

  transform(array: any, field: string,sort:string): any[] {
    array.sort((a: any, b: any) => {
      if(sort=='asc'){
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      }else{
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return array;
}
}
