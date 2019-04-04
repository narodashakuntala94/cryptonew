import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  Myname='My name is sakhu'

  //  text='input text changed'
  // text=''
 
  // callMyfunction(){
  //   // console.log('button clicked');
  //   alert('button clicked');
  // }
  //   updatevent(e){
  //   this.text=e.target.value;
  // }

  
  ngOnInit() {
   /* used for auto plal  */
    $('.autoplay').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      });
   /* added for window scrooling */ 
      //scrolll to top btn

        
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
    $('#return-to-top').fadeIn(200);    
    } else {
    $('#return-to-top').fadeOut(200); 
    }
    });
    $('#return-to-top').click(function() {      
    $('body,html').animate({
    scrollTop : 0                      
    }, 500);
    });  
    }

}
