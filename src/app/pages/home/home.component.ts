import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';
import {PopoverModule} from "ng2-popover";
import { Sucest } from "./../../models/Sucest";
import { RefineResult } from "./../../models/RefineResult";
import { RefineService } from "./../../services/Refine.service";
import { BlastResult } from '../../models/BlastResult';


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


  constructor(
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
      }    
    });
  }

  data = [
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    },
    {
      "id": "SCQGLR1086E02.g",
      "description": "endo-beta- -glucanase precursor",
      "sequence": "XAQQLFEFGDRYRGTYDSSIAEVRSYYASVSGYQDELLWAALWLHRATGRDDYLRYAVDKAESFGGVGWAMTEFSWDVKYAGVQVLAAKLLLEGDPGALKHRSVLEQYKAKAEHYLCACLGRNGGNGSDNVERSPGGMLYVRQWNNLQYVXQRRX"
    }];
 


}
