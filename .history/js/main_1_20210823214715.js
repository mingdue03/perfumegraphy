$(document).ready( function(){
 
  var winW= $(window).width();
  var headerB =$('.header_b').offset().top; 

  if(winW>768){
    // HEADER HEADER_B.STICK
    $(window).scroll(function(){
    var scrollH=$(window).scrollTop();
      if(scrollH>headerB){
        $('.header_b').addClass('stick');
      }else{
        $('.header_b').removeClass('stick');
      }
    })
    //SUB.MOUSEOVER 
    $('.gnb>li').mouseover(function(){
      $(this).find('.sub_menu').stop().slideDown(500);
    });
    $('.gnb>li').mouseleave(function(){
      $(this).find('.sub_menu').hide();
    });

  }else{
    // HEADER HEADER_TOP.STICK
    $(window).scroll(function(){
      var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_top').addClass('stick');
        }else{
          $('.header_top').removeClass('stick');
        }
    });
    //HAM BTN CLICK
    $('.ham_btn').click(function(){
      $('.header_b').animate({right:0},500);
      $('.gnb_dim').fadeIn(200);
      
    });
    $('.gnb_dim body').click(function(){
      $('.header_b').animate({right:'-56%'},500);
      $('.gnb_dim').fadeOut(200);
    });

    $('.gnb>li').click(function(){
      $(this).find('.sub_menu').stop().slideToggle(500);
    });

  }


  $(window).resize(function(){
    var winR=$(window).width();
    console.log(winR);
    if(winR>768){
      //dimed
      $('.gnb_dim').removeAttr('style');
      //stick
      $(window).scroll(function(){
        var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_b').addClass('stick')
        }
        $('.header_top').attr('class','header_top');
      });
    }else{

      $(window).scroll(function(){
        $('.header_top').addClass('stick');
        $('.header_b').attr('class','header_b');
      });

    }
  });

} );