import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Endpoint, headers } from '../app.endpoints';



@Injectable()
export class UtilService {

  constructor(private http: HttpClient) { }

  
}
