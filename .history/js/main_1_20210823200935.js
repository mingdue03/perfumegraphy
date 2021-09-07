$(document).ready( function(){
 
  var winW= $(window).width();
  console.log(winW)

  if(winW>768){
    var headerB =$('.header_b').offset().top; 
    var scrollH=$(window).scrollTop();

    $(window).scroll(function(){
      if(scrollH>headerB){
        $('.header_b').addClass('stick')
      }else{
        $('.header_b').removeClass('stick')
      }
    })



  }else{




  }


} );