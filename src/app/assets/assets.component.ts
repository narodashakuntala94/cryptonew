import { Component, OnInit , ViewEncapsulation} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AssetsComponent implements OnInit {
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
