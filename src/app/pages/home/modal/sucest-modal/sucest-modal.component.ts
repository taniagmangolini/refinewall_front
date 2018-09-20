import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import { ISucestModal } from '../../../../../app/interfaces/ISucestModal';
import { Sucest } from '../../../../models/Sucest';


@Component({
  selector: 'app-sucest-modal',
  templateUrl: './sucest-modal.component.html',
  styleUrls: ['./sucest-modal.component.css']
})
export class SucestModalComponent extends DialogComponent<ISucestModal, boolean> implements ISucestModal {

   sucest: Sucest;

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