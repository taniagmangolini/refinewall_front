import { ProteinVO } from "./ProteinVO";

export class UniprotVO {

    accessions:string[] ;
	
    protein:ProteinVO;
    
    genes:string[];
    
    sequence:string;

    organism:string;

    keywords:string[];

    databases: string[];
} 