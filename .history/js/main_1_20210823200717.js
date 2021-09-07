$(document).ready( function(){
 
  var winW= $(window).width();

  if(winW>768){
    var headerBH =$('.header_b').offset().top; 
    var scrollH=$(window).scrollTop();

    $(window).scroll(function(){
      if(scrollH>headerBH){
        $('.header.bo')
      }
    })



  }else{




  }


} );