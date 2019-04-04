import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { ReportsComponent } from './reports/reports.component';
import { SupportComponent } from './support/support.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ExchangeComponent,
    AccountComponent,
    AssetsComponent,
    ReportsComponent,
    SupportComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },

      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'assets',
        component: AssetsComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'exchange',
        component: ExchangeComponent
      }
      
      

    ])





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
