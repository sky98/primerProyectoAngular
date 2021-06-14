import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_ENDPOINT = 'http://localhost/admission_test/public/api';
  constructor(private httpClient: HttpClient) { }
  save(user: User){
  	const headers = new HttpHeaders({'Content-Type':'application/json'});
  	return this.httpClient.post(this.API_ENDPOINT + '/user', user, {headers: headers});
  }
}
