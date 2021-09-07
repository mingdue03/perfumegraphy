$(document).ready( function(){
 
  var winW= $(window).width();
  var headerB =$('.header_b').offset().top; 

  if(winW>768){
    // HEADER HEADER_B.STICK
    $(window).scroll(function(){
    var scrollH=$(window).scrollTop();
      if(scrollH>headerB){
        $('.header_b').addClass('stick')
      }else{
        $('.header_b').removeClass('stick')
      }
    })
    //SUB.MOUSEOVER 
    $('.gnb>li').mouseover(function(){
      $(this).find('.sub_menu').stop().slideToggle(500)
    });

  }else{
    // HEADER HEADER_TOP.STICK
    $(window).scroll(function(){
      var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_top').addClass('stick')
        }else{
          $('.header_top').removeClass('stick')
        }
    })

    $('.gnb>li').click(function(){
      $(this).find('.sub_menu').stop().slideToggle(500);
    

  }


  $(window).resize(function(){
    var winR=$(window).width();
    console.log(winR);
    if(winR>768){
      $('.gnb_dim').removeAttr('style');
      $(window).scroll(function(){
        var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_b').addClass('stick')
        }
        $('.header_top').attr('class','header_top');
      });
      //$('.header_b').attr('class','header_b stick');
    }else{

      $(window).scroll(function(){
        $('.header_top').addClass('stick');
        $('.header_b').attr('class','header_b');
      });

    }
  });

} );