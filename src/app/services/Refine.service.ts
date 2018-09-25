import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Endpoint, headers } from '../app.endpoints';
import { RefineResult } from '../models/RefineResult';
import { Uniprot } from '../models/Uniprot';

@Injectable()
export class RefineService {

  constructor(private http: HttpClient) { }

  getRefineResultBySequenceEmail(sequence: string, email: string): Observable<RefineResult> {
    return this.http.get<RefineResult>(Endpoint.refineBySequence + "?sequence=" + sequence + "&email=" + email  );
  }


  getUniprotById(id: string): Observable<Uniprot> {
    return this.http.get<Uniprot>(Endpoint.uniprotById + "?idProtein="  );
  }

}
