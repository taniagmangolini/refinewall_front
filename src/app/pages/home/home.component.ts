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
  statusBlastJob: string = ""

  constructor(
    private modal: DialogService, 
    private spinnerService: Ng4LoadingSpinnerService,
    private refineService: RefineService) {
  }

  ngOnInit() {

    this.clearSearch();

    this.checkIfRefineIsON();

  }

  checkIfRefineIsON() {

    console.log("checking if refine is ON =>");

    this.refineService.getRefineIsON().subscribe(statusJob => {

      console.log(statusJob);

    }, (error: ErrorMessage) => {

     console.log(" Refine is NOT ON => " + error);
   });
  }

  clearSearch() {

    this.sucestList = [] ;

    this.blastResultList = [] ;

    this.sequenceSearch = "";

    this.emailSearch = "";

    this.optionSearch = "";

    this.hasResult =  false;

    this.errorMsg = "";

    this.statusBlastJob = ""

  }

  refineIdOrSequence() {

    this.checkIfRefineIsON() ;

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

    //waiting some seconds to heroku start the server
    this.spinnerService.show();
    
    setTimeout(()=> {

      if (this.optionSearch == "id") {

        this.searchByIdEmail();

      } else {

        this.searchBySequenceEmail();
      }

    }, 5000);
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

      this.statusBlastJob = "";

      console.log("by sequence " + this.sequenceSearch);

      if(this.emailSearch == "") {
        this.errorMsg = 'Inform your e-mail!';
      }

      //run the blast
      this.refineService.getBlastJobId(this.sequenceSearch, this.emailSearch)
      .subscribe(data => {

       let  job : string = data;

       let timeout : number = 15000;

        console.log("jobId = >" + job);

        setTimeout(()=>{  

          this.refineService.getBlastStatus(job).subscribe(statusJob => {

            this.statusBlastJob =  statusJob;
  
            console.log( "statusJob = >" + statusJob);

            if(statusJob == 'FINISHED') {

              timeout = 0;

              console.log( "proceed without wait");

            } else {

              console.log( " wait to process");

            }

              //get the blast result
            setTimeout(()=>{ 

              this.refineService.getRefineResultBySequenceEmailJob(this.sequenceSearch, this.emailSearch,  job)
              .subscribe(data => {
         
                console.log("got Refine Result By Sequence Email Job");

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
            
            }, timeout ); 

          }, (error: ErrorMessage) => {
      
            console.log("error to get job blast status >" + error.message);
    
            this.errorMsg = "Error to get the blast status " + error.message;   
    
            this.spinnerService.hide();
    
          });

        }, timeout)
  
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
