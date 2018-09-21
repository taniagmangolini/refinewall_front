import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import { ISucestModal } from '../../../../../app/interfaces/ISucestModal';
import { BlastResult } from '../../../../models/BlastResult';
import { IUniprotModal } from '../../../../interfaces/IUniprotModal';


@Component({
  selector: 'app-uniprot-modal',
  templateUrl: './uniprot-modal.component.html',
  styleUrls: ['./uniprot-modal.component.css']
})
export class UniprotModalComponent extends DialogComponent<IUniprotModal, boolean> implements IUniprotModal {

    blastResult: BlastResult;

    constructor(private modal: DialogService ){
       super(modal);
     }

     ngOnInit() {
     }

     cancel() {
        this.result = false;
        this.close();
      }
}