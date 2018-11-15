import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSucestByDescriptionGenePipe'
}) 
export class FilterSucestByDescriptionGenePipe implements PipeTransform {

    transform(items: any[], filter: string): any {
        
        if (filter === undefined || filter == '' || filter == null ) {
            return items;
        }

        const search = filter != null ? filter.toLowerCase() : "";

        return items.filter(item => {

            const gene = item.gene != null ? item.gene.toLowerCase() : '';
            const description = item.description != null ? item.description.toLowerCase() : ''; 

            if (description.includes(search) || gene.includes(search)) {
                return item;
            }
        });
    }
}