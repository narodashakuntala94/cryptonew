import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  
  selectedRegister: User;
  userdetails: User[];
  readonly baseURL = 'http://13.59.222.160:3000/signUp'

  constructor(private http : HttpClient) { }


  postEmployee(reg : User){
    return this.http.post(this.baseURL, reg);
  }


}
