import { Component, OnInit , ViewEncapsulation} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AccountComponent implements OnInit {
  hideMenu:boolean = false;
  constructor() { }

  ngOnInit() {










  //  start java script and jQuery view code


    $(".showacctpage").on('click',function(){
        alert("hi"); 
         $("#prsnlacctsubmodal").modal('hide');
         $('#hide2').hide();
         $('#hide1').show();
 //        $("button").removeClass("prsnlacctbtn");
     });
     
     /******* Remove verify btn class in prsnl acct *******/
      $(".showacctpage").on('click',function(){
        $(".prsnlacctbtn").removeClass('prsnlacctbtn');  
      });
     /******* Remove verify btn class in crprt acct *******/
     $(".showacctpage1").on('click',function(){
         $(".crprtacctbtn").removeClass('crprtacctbtn');  
         alert("hi");
      });
    /************************ account persoanl verify btn click ****************************/
     $('.crprtacctbtn').on('click',function(){
                alert("hi");
         $('#hide1').hide();
         $('#hide3').show();
     }); 
     




        $('.prsnlacctbtn').on('click',function(){
            $('#hide1').hide();
            $('#hide2').show();
        });
 

   
     /*********** TO CLICKON KYC TAB HIDE ACCT ALL TAB*******/
    $('#kyc1').click(function(){
        alert("hi");
         $('#hide2').hide();
         $('#hide3').hide();
     }); 
      
     /**********  TO CLICK ON ACCT TAB SHOW HIS TAB *********/ 
      $("#act1").click(function(){
      alert("hi");
          $('#hide1').show();
      });
  
        
        /********************** KYC TAB  SUBMIT BTN CLICK THEN DISPALY 2Nd FORM  *************/  
        $('.Kycbtn1').on('click', function() {
            $('#kycform1').hide();
            $('#kycform2').show();
            $('#kycform3').show();           
        });




        $('#profile-image1').on('click', function() {
          $('#profile-image-upload1').click();
           });
          $('#profile-image2').on('click', function() {
          $('#profile-image-upload2').click();
           });
          $('#profile-image3').on('click', function() {
          $('#profile-image-upload3').click();
           });


                
          /******************** ANTI PHISHING ENBALE BTN ***************/
          $(".btnanti").click(function(){
            $("#multibutton").text('Modify');
          });
            
            /********* ONE BY ONE TWO MODAL CALL IN ONE BTN ANTI PHISHING ENABLE OR DISABLE *************/
          $('#multibutton').on('click', function() {
            //alert("This is the first alert!");
              $("#myModalantiphis1").modal('show');
            
            $(this).off('click');
            $(this).on('click', function() {
                //alert("This is the second alert!");
                $('#myModalantiphis2').modal('show');
            });
          });





  }


  ngAfterViewInit(){
    // this.toggle()
  }

  toggle(){
    
    this.hideMenu = !this.hideMenu
    event.stopPropagation();
  }




}
