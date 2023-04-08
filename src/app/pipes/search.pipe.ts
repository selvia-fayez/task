import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(deals: any[], searchWord: string): any[] {
    return deals.filter(
      (deal) =>
        deal.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        deal.last_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        deal.email.toLowerCase().includes(searchWord.toLowerCase())
    );
  }
}
