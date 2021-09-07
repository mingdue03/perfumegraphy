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


  }


  $(window).resize(function(){
    var winR=$(window).width();
    if(winR>768){
      $('.gnb_dim').removeAttr('style');
    }else{
      $('.header_b').removeClass('stick');

    }
  }

} );