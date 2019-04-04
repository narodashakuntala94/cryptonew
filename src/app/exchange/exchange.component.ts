import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ExchangeComponent implements OnInit {
  hideMenu:boolean = false;
  constructor()  { }

  ngOnInit() {
  

  }

  ngAfterViewInit(){
    // this.toggle()
  }

  toggle(){
    
    this.hideMenu = !this.hideMenu
    event.stopPropagation();




    
//     $('#menu-button').click(function(e){
//       event.stopPropagation();
//        $('#hide-menu').toggleClass('show-menu');
//       });
//   $('#hide-menu').click(function(e){
//       event.stopPropagation();
//       });
//   $('body,html').click(function(e){
//          $('#hide-menu').removeClass('show-menu');
//       }); 
//       $('#menu-button1').click(function(e){
//       e.stopPropagation();
//        $('#hide-menu').toggleClass('show-menu');
//       });
      
      
// $('.dropdown-menu a').click(function(){
// $('#selected').text($(this).text());
// });

  }

}
