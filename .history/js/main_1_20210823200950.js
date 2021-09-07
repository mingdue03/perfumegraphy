$(document).ready( function(){
 
  var winW= $(window).width();
  console.log(winW)

  if(winW>768){
    var headerB =$('.header_b').offset().top; 
    console.log(headerB)
    var scrollH=$(window).scrollTop();
    console.log(scrollH)

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