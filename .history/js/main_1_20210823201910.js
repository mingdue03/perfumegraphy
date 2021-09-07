$(document).ready( function(){
 
  var winW= $(window).width();
  var headerB =$('.header_b').offset().top; 

  if(winW>768){

    $(window).scroll(function(){
    var scrollH=$(window).scrollTop();
      if(scrollH>headerB){
        $('.header_b').addClass('stick')
      }else{
        $('.header_b').removeClass('stick')
      }
    })



  }else{
    $(window).scroll(function(){
      var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_top').addClass('stick')
        }else{
          $('.header_top').removeClass('stick')
        }
      })



  }


} );