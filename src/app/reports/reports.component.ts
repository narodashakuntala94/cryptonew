import { Component, OnInit , ViewEncapsulation} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ReportsComponent implements OnInit {
  hideMenu:boolean = false;
 
  constructor() { }

  ngOnInit() {

  



  }



  ngAfterViewInit(){
    // this.toggle()
  }

  toggle(){
    
    this.hideMenu = !this.hideMenu
    event.stopPropagation();
  }



}
