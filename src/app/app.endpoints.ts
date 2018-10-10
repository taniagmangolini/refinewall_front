import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://refinewall-refinewall.1d35.starter-us-east-1.openshiftapps.com/refinewall-0.0.1-SNAPSHOT/';

//const BASE_URL = 'http://localhost:8080';

const GLOBAL = {
 // login: BASE_URL + '/login', 
  refineBySequence: BASE_URL + '/refine/sequence/', 
  refineById: BASE_URL + '/refine/id/', 
  uniprotById: BASE_URL + '/uniprot'
};

export const Endpoint = {
  ...GLOBAL
};

export const headers = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':  'application/json'
  })
};
