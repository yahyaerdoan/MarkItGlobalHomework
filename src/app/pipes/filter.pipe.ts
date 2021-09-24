import { User } from './../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], filterText: string ): User[] {
    filterText = filterText?filterText
    .toLocaleLowerCase():""
    return filterText? value
    .filter((u:User)=>u.name.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }

}
