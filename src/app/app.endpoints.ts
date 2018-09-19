import { HttpHeaders } from '@angular/common/http';


const BASE_URL = 'http://localhost:8080';

const GLOBAL = {
  login: BASE_URL + '/login', 
  refineBySequence: BASE_URL + '/refine/sequence/', 
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
