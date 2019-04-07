import { Component, OnInit , ViewEncapsulation} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
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
