import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import { ISucestModal } from '../../../../../app/interfaces/ISucestModal';
import { Sucest } from '../../../../models/Sucest';
import { RefineService } from '../../../../services/Refine.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-sucest-modal',
  templateUrl: './sucest-modal.component.html',
  styleUrls: ['./sucest-modal.component.css']
})
export class SucestModalComponent extends DialogComponent<ISucestModal, boolean> implements ISucestModal {

   sucest: Sucest;
  
   blastContent: any = "";
   

    constructor(private modal: DialogService, private refineService: RefineService ){
       super(modal);
     }

     ngOnInit() {

      console.log("sucest = > " + this.sucest.gene);

      if(this.sucest != null) {

        console.log("searching = > " + this.sucest.gene);

        this.refineService.getSucestBlastBySucestGene(this.sucest.gene).subscribe(data => {
          console.log("data = > " + data);

          if(data != null) {

            this.blastContent =  data;
         }

      }, error => {

        this.blastContent = "Blast file not found";
        console.log("Error = > " + error);

      });
    }
     }

     cancel() {
        this.result = false;
        this.close();
      }
}