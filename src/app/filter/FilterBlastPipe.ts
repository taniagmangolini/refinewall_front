import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBlastPipe'
}) 
export class FilterBlastPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        
        if (filter === undefined || filter == '') {
            return items;
        }

        const search = filter.toLowerCase();

        return items.filter(item => {
            const uniqueIdentifier = item.uniqueIdentifier.toLowerCase();
            const organismName = item.organismName.toLowerCase();
            const geneName =  item.geneName != null? item.geneName.toLowerCase() : null;
            const entryName = item.entryName.toLowerCase();
            const proteinName = item.proteinName != null? item.proteinName.toLowerCase() : null;
            const sucestBusca = item.sucestBusca != null? item.sucestBusca.toLowerCase() : null;

            if (uniqueIdentifier.includes(search) ||
                organismName.includes(search) ||
                (sucestBusca != null && sucestBusca.includes(search)) ||
                (geneName != null && geneName.includes(search))  ||
                entryName.includes(search) ||
                (proteinName != null && proteinName.includes(search) ) ) {
                return item;
            }
        });
    }
}