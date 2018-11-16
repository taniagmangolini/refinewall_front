import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://refinewall.herokuapp.com';


//const BASE_URL = 'http://localhost:8080';

const GLOBAL = {
  refineBySequence: BASE_URL + '/refine/sequence/', 
  refineById: BASE_URL + '/refine/id/', 
  uniprotById: BASE_URL + '/uniprot',
  sucestBlastBySucestGene: BASE_URL + '/file/blast/', 
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
