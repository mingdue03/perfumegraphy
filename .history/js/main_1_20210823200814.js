$(document).ready( function(){
 
  var winW= $(window).width();

  if(winW>768){
    var headerB =$('.header_b').offset().top; 
    var scrollH=$(window).scrollTop();

    $(window).scroll(function(){
      if(scrollH>headerB){
        $('.header_b').addClass('stick')
      }
    })



  }else{




  }


} );