$(document).ready( function(){
   
  var $headerTop =$('.header_b').offset().top; 

  $(window).scroll(function(){
    var scroll=$(window).scrollTop()

    if(scroll >$headerTop ){
        $('.header_b ').addClass('stick')
    }else{
        $('.header_b').removeClass('stick')
    }     
  });

  if($(window).length()>'768px'){
    console.log($(window).width());

    $('.gnb>li').mouseover(function(){
      $(this).find('.sub_menu').stop().slideDown(500);
    });
    $('.gnb>li').mouseleave(function(){
      $(this).find('.sub_menu').hide();
    });
  }


  $("#slides").slidesjs({
     width: 1440,
      height: 750,
      pagination: {
        active: true,
        effect: "fade"
      },
      play: {
        effect: "fade",
        interval: 2000,
        auto: true
      }
  });
    
    
  $(".pro_img").mouseover(function(){
        $(this).find('.interest').fadeIn();
    }).mouseleave(function(){
        $(this).find('.interest').fadeOut();
  });



  $(".month_product").mouseover(function(){
    $(this).find('.month_prod_info').fadeIn();
  }).mouseleave(function(){
    $(this).find('.month_prod_info').fadeOut();
  });

  
} );