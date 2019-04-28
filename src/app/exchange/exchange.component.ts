import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

import { ExchangeService } from '../service/exchange.service';
import { NgForm } from '@angular/forms';
import { Exchange } from '../model/exchange.model';
import { Favourite } from '../model/favourite.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
declare var $:any;

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  encapsulation:ViewEncapsulation.None,
  providers: [ExchangeService]
})
export class ExchangeComponent implements OnInit {

  showCCD:boolean=true;

  // cryptoRates: any = []; 

  // buyingPriceUsd: Number;
  cryptoRates: Exchange[];
  favourites: Favourite[];

  hideMenu:boolean = false;

  percentChange24h="";

  constructor(private router: Router, private exchangeService: ExchangeService,  private loginService: LoginService)  { }



  ngOnInit() {
  
    this.showCCD = !this.showCCD;

    this.getData();
   
        var signedFlag = "text-success";


        // if (cryptoRates.percentChange24h < 0) {
        //     signedFlag = "text-danger";
        // }


      
      
  }



        logout() {
          this.loginService.logout();
          this.router.navigate(['/login']);
      }

    
        getData(){

          this.exchangeService.getExchangeList().subscribe( data => {
          console.log(data);
          this.cryptoRates = data;

        });
      
    }



        // this.exchangeService.getFavoriteList(fav : Favourite).subscribe( data => {
        //   console.log(data);
        //   this.favourites = data;
        // });
    

  ngAfterViewInit(){
    // this.toggle()
  }

  toggle(){
    this.hideMenu = !this.hideMenu
    event.stopPropagation();
  }

}
