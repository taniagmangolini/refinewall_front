import { SucestSequence } from "./SucestSequence";
import { BlastResult } from "./BlastResult";

export class Sucest {
    id: number;
    gene:string;
    description:string;
    sucestSequences: SucestSequence[];
    blastResults: BlastResult[];
}