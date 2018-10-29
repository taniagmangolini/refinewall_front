import { SucestSequence } from "./SucestSequence";
import { BlastResult } from "./BlastResult";

export class Sucest {
    id: number;
    gene:string;
    description:string;
    domainsString: string;
    sequences: SucestSequence[];
    blastResults: BlastResult[];
}