import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


import { Exchange } from '../model/exchange.model';
import { Favourite } from '../model/favourite.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  // selectedEmployee: Exchange;
  // cryptoRates: Exchange[];
  readonly baseURL = 'http://13.59.222.160:3000/updateCryptoRates'

  readonly baseURLNEW = 'http://13.59.222.160:3000/fetchFavourites'


  constructor(private http : HttpClient) { }

  getExchangeList(){
    return this.http.get<Exchange[]>(this.baseURL);
  }


  // getFavoriteList(fav : Favourite){
  //   return this.http.post<Favourite[]>(this.baseURLNEW, fav);
  // }




}
