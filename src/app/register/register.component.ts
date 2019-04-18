import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegisterService } from '../service/register.service';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

declare var M: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
    form.reset();
    this.registerService.selectedRegister = {
      userId: "",
      firstName: "",
      lastName: "",
      emailId: "",
      mobileNumber: "",
      password: "",
    }
  }

  onSubmit(form : NgForm){
   
      this.registerService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.router.navigate(['login']);
    
      });
   
  }



  
}
