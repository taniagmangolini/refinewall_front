import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://refinewall.herokuapp.com';


//const BASE_URL = 'http://localhost:8080';

const GLOBAL = {
  refineIsOn: BASE_URL + '/refine/', 
  refineBySequence: BASE_URL + '/refine/sequence/', 
  refineBySequenceJob: BASE_URL + '/refine/sequence-job/', 
  refineById: BASE_URL + '/refine/id/', 
  uniprotById: BASE_URL + '/uniprot',
  sucestBlastBySucestGene: BASE_URL + '/file/blast/',
  runBlast: BASE_URL + '/blast/',
  getBlastStatus: BASE_URL + '/blast/status/'

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
