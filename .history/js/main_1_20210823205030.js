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
    console.log(winR);
    if(winR>768){
      $('.gnb_dim').removeAttr('style');
      $('.header_b').attr('class','header_b stick')
    }else{
      $('.header_b').removeClass('stick')
    }
  });

} );