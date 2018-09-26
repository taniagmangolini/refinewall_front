import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import { ISucestModal } from '../../../../../app/interfaces/ISucestModal';
import { BlastResult } from '../../../../models/BlastResult';
import { IUniprotModal } from '../../../../interfaces/IUniprotModal';
import { UniprotVO } from '../../../../models/UniprotVO';
import { RefineService } from '../../../../services/Refine.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-uniprot-modal',
  templateUrl: './uniprot-modal.component.html',
  styleUrls: ['./uniprot-modal.component.css']
})
export class UniprotModalComponent extends DialogComponent<IUniprotModal, boolean> implements IUniprotModal {

    blastResult: BlastResult;
    uniprotVO : UniprotVO;
    option: string = 'Details';

    constructor(
      private modal: DialogService,
      private refineService: RefineService,
      private spinnerService: Ng4LoadingSpinnerService ){
       super(modal);
       this.spinnerService.show();
     }

     ngOnInit() {
      

       if(this.blastResult != null && this.blastResult.entryName != null) {

          this.refineService.getUniprotById(this.blastResult.entryName).subscribe(data => {

            if(data != null) {
              this.uniprotVO =  data;
           }

           this.spinnerService.hide();

        }, error => {

           this.spinnerService.hide();
           console.log("Error = > " + error);

        });
      }
    };

    changeOption(selectedOption: string) {
      this.option = selectedOption;
    };
    
    cancel() {
        this.result = false;
        this.close();
    }
}