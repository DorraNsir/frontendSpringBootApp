import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    // If filterText is empty or undefined, return the full list
    if (!filterText) {
      return list;
    }

    return list ? list.filter(item =>
      item.nomFilm?.toLowerCase().includes(filterText.toLowerCase())) : [];
  }

}
