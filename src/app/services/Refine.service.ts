import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Endpoint, headers } from '../app.endpoints';
import { RefineResult } from '../models/RefineResult';
import { UniprotVO } from '../models/UniprotVO';

@Injectable()
export class RefineService {

  constructor(private http: HttpClient) { }

  getRefineResultBySequenceEmail(sequence: string, email: string): Observable<RefineResult> {
    return this.http.get<RefineResult>(Endpoint.refineBySequence + "?sequence=" + sequence + "&email=" + email  );
  }

  getRefineResultByIdEmail(id: string, email: string): Observable<RefineResult> {
    return this.http.get<RefineResult>(Endpoint.refineById + "?id=" + id + "&email=" + email  );
  }

  getUniprotById(id: string): Observable<UniprotVO> {
    return this.http.get<UniprotVO>(Endpoint.uniprotById + "?idProtein=" + id  );
  }

}
