import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import {PopoverModule} from "ng2-popover";
import { Sucest } from "./../../models/Sucest";
import { RefineResult } from "./../../models/RefineResult";
import { RefineService } from "./../../services/Refine.service";
import { BlastResult } from '../../models/BlastResult';
import { ISucestModal } from '../../../app/interfaces/ISucestModal';
import { SucestModalComponent } from './modal/sucest-modal/sucest-modal.component';
import { UniprotModalComponent } from './modal/uniprot-modal/uniprot-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sequenceSearch: string;
  emailSearch: string;
  optionSearch: string;
  sucestList: Sucest[] = [] ;
  blastResultList: BlastResult[] = [] ;
  hasResult: boolean = false;


  constructor(
    private modal: DialogService, 
    private refineService: RefineService) {
  }

  ngOnInit() {

    this.clearSearch();
  }

  clearSearch() {

    this.sucestList = [] ;

    this.blastResultList = [] ;

    this.sequenceSearch = "";

    this.emailSearch = "";

    this.optionSearch = "";

    this.hasResult =  false;
  }

  searchBySequenceEmail() {

    let refineResultList : RefineResult[] = [];

    console.log("sequence = > " + this.sequenceSearch);

    console.log("email = > " + this.emailSearch);

    console.log("optionSearch = > " + this.optionSearch);

    this.refineService.getRefineResultBySequenceEmail(this.sequenceSearch, this.emailSearch)
    .subscribe(data => {

      if(data != null) {

        if(data.sucests != null ){
          this.sucestList = data.sucests;
          console.log( this.sucestList);
          for(let i = 0; i < this.sucestList.length; i++ ) {
            if(this.sucestList[i].blastResults != []) {
              console.log( this.sucestList[i]);
              for(let j = 0; j < this.sucestList[i].blastResults.length; j++ ) {
                  this.blastResultList.push(this.sucestList[i].blastResults[j]);
               }
            }
          }
        }
        this.hasResult =  true;
      }    
    });
  }

  callSucestModal (sucestSelected:Sucest) {

    this.modal.addDialog(SucestModalComponent, {
      sucest: sucestSelected
    });
  }

  callUniprotModal (blastItemSelected:BlastResult) {

    this.modal.addDialog(UniprotModalComponent, {
      blastResult: blastItemSelected
    });
  }

  

}
