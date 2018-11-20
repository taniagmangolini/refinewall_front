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
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ErrorMessage } from '../../models/ErrorMessage';
import { ExportToCsv } from 'export-to-csv';

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
  errorMsg = "";

  constructor(
    private modal: DialogService, 
    private spinnerService: Ng4LoadingSpinnerService,
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

    this.errorMsg = "";

  }

  refineIdOrSequence() {

    this.blastResultList = [] ;

    this.sucestList = [];

    this.hasResult = false;

    this.errorMsg = "";

    if(this.optionSearch == "" && this.sequenceSearch == "" && this.emailSearch == "") {
      this.errorMsg = 'Inform all the search fields!';

    } else if(this.optionSearch == "") {
        this.errorMsg = 'Select the search option!';

    } else if (this.optionSearch == "sequence" && this.sequenceSearch == "") {
      this.errorMsg = 'Inform the sequence!';

    } else if (this.optionSearch == "id" && this.sequenceSearch == "") {
      this.errorMsg = 'return "Informe the id!';

    } 

    if(this.errorMsg != "") {
      return;
    }

    this.spinnerService.show();

    if (this.optionSearch == "id") {

      this.searchByIdEmail();

    } else {

      this.searchBySequenceEmail();
    }

    //console.log("blastResultList " + (this.blastResultList == null));
   // console.log("hasresult " + this.hasResult);
   // console.log("error " + this.errorMsg);


  };

  searchByIdEmail() {

     console.log("by Id " + this.sequenceSearch);

     this.emailSearch = 'not_necessary_to_process';

      this.refineService.getRefineResultByIdEmail(this.sequenceSearch, this.emailSearch)

      .subscribe(data => {

        if(data != null && data != undefined) {

          if(data.sucests != null && data.sucests.length > 0) {

            this.sucestList = data.sucests;

            for(let i = 0; i < this.sucestList.length; i++ ) {

              if(this.sucestList[i].blastResults != []) {

                console.log( this.sucestList[i]);

                for(let j = 0; j < this.sucestList[i].blastResults.length; j++ ) {

                  this.blastResultList.push(this.sucestList[i].blastResults[j]);
                }
              }
            }
            this.hasResult =  true;

          } else {

            this.hasResult =  false;

            this.errorMsg = "Not found!";   

          } 

         } else {

          this.hasResult =  false;

          this.errorMsg = "Not found!";   

        }

      this.emailSearch = "";

      this.spinnerService.hide();

      }, (error: ErrorMessage) => {

        console.log("error= >" + error.message);

        this.errorMsg = "Error to process the request: " + error.message;   

        this.emailSearch = "";

        this.spinnerService.hide();

      });

    } ;

  searchBySequenceEmail() {

      console.log("by sequence " + this.sequenceSearch);

      if(this.emailSearch == "") {
        this.errorMsg = 'Inform your e-mail!';
      }
      
      this.refineService.getBlastJobId(this.sequenceSearch, this.emailSearch)
      .subscribe(data => {

       let  job : string = data;

        console.log("jobId = >" + job);

        this.refineService.getRefineResultBySequenceEmailJob(this.sequenceSearch, this.emailSearch,  job)
        .subscribe(data => {
          console.log("got RefineResultBySequenceEmailJob");

          if(data != null) {
  
            if(data.sucests != null && data.sucests.length > 0 ) {
  
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
              this.hasResult =  true;
  
            } else {
  
              this.hasResult =  false;
  
              this.errorMsg= "Not found!";  
  
            } 
  
           } else {
  
            this.hasResult =  false;
  
            this.errorMsg= "Not found!";   
  
          }
  
        this.spinnerService.hide();
  
        }, (error: ErrorMessage) => {
  
          console.log("error = >" + error.message);
  
          this.errorMsg = "Error to process the request: " + error.message;   
  
          this.spinnerService.hide();
  
        });


      }, (error: ErrorMessage) => {

        this.refineService.getRefineResultBySequenceEmail(this.sequenceSearch, this.emailSearch)
        .subscribe(data => {
  
          if(data != null) {
  
            if(data.sucests != null && data.sucests.length > 0 ) {
  
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
              this.hasResult =  true;
  
            } else {
  
              this.hasResult =  false;
  
              this.errorMsg= "Not found!";  
  
            } 
  
           } else {
  
            this.hasResult =  false;
  
            this.errorMsg= "Not found!";   
  
          }
  
        this.spinnerService.hide();
  
        }, (error: ErrorMessage) => {
  
          console.log("error = >" + error.message);
  
          this.errorMsg = "Error to process the request: " + error.message;   
  
          this.spinnerService.hide();
  
        });

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

  exportToCsv() {

    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      useBom: true,
      useKeysAsHeaders: true
    };
  
    const csvExporter = new ExportToCsv(options);
  
    csvExporter.generateCsv(this.blastResultList);

  };

}
