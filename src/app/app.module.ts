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
import { AdminComponent } from './admin/admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AllUserComponent } from './all-user/all-user.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { AlltransactionsComponent } from './alltransactions/alltransactions.component';
import { AdmminsupportComponent } from './admminsupport/admminsupport.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { RejectedcontactComponent } from './rejectedcontact/rejectedcontact.component';
import { RatesComponent } from './rates/rates.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


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
    AboutUsComponent,
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    AllUserComponent,
    MywalletComponent,
    AlltransactionsComponent,
    AdmminsupportComponent,
    AllcontactComponent,
    RejectedcontactComponent,
    RatesComponent,
    PagelistComponent,
    AdminsignupComponent,
    AdminloginComponent
    
   
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
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'all-user',
        component: AllUserComponent
      },
      {
        path: 'mywallet',
        component: MywalletComponent
      },
      {
        path: 'alltransactions',
        component: AlltransactionsComponent
      },
      {
        path: 'admminsupport',
        component:  AdmminsupportComponent
      },
      {
        path: 'allcontact',
        component:  AllcontactComponent
      },
      {
        path: 'rejectedcontact',
        component:  RejectedcontactComponent
      },
      {
        path: 'rates',
        component:  RatesComponent
      },
      {
        path: 'pagelist',
        component:  PagelistComponent
      },
      {
        path: 'adminsignup',
        component:  AdminsignupComponent
      }

  ])





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
