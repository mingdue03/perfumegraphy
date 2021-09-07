$(document).ready( function(){
 
  var winW= $(window).width();
  console.log(winW)
  var headerB =$('.header_b').offset().top; 
    console.log(headerB)
  var scrollH=$(window).scrollTop();
    console.log(scrollH)

  if(winW>768){

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