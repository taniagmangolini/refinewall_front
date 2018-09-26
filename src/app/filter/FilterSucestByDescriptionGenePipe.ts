import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSucestByDescriptionGenePipe'
}) 
export class FilterSucestByDescriptionGenePipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (filter === undefined || filter == '') {
            return items;
        }

        const search = filter.toLowerCase();

        return items.filter(item => {
            const description = item.gene.toLowerCase();
            const gene = item.description.toLowerCase();

            if (description.includes(search) || gene.includes(search)) {
                return item;
            }
        });
    }
}