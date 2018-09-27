import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBlastPipe'
}) 
export class FilterBlastPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        
        if (filter === undefined || filter == '') {
            return items;
        }

        const search = filter != null ? filter.toLowerCase() : "";

        return items.filter(item => {

            const uniqueIdentifier = item.uniqueIdentifier != null ? item.uniqueIdentifier.toLowerCase() : "";
            const organismName = item.organismName != null ? item.organismName.toLowerCase() : "";
            const geneName =  item.geneName != null? item.geneName.toLowerCase() : "";
            const entryName = item.entryName != null ? item.entryName.toLowerCase() : "";
            const proteinName = item.proteinName != null? item.proteinName.toLowerCase() : "";
            const sucestBusca = item.sucestBusca != null? item.sucestBusca.toLowerCase() : "";

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