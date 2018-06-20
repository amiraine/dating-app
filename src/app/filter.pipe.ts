import { Pipe, PipeTransform} from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform{
  transform(items: any[], parameter: string){
    if(!parameter){
      return items;
    }
    let results = [];
    for(var i = 0; i<items.length; i++){
      if(items[i].orientation === parameter){
        results.push(items[i]);
      }
    }
    return results;
  }
}
