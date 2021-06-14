import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  API_ENDPOINT = 'http://localhost/admission_test/public/api';
  
  constructor(private httpClient: HttpClient) { }

  get(){
  	return this.httpClient.get(this.API_ENDPOINT + '/product');
  }

}
