$(document).ready( function(){
   
  var $headerB =$('.header_b').offset().top; 
  var $headerTop =$('.header_top').offset().top; 
  var winW= $(window).width();


  $(window).scroll(function(){
    var scroll=$(window).scrollTop()
    if(winW > 768){
      if(scroll >$headerB ){
          $('.header_b ').addClass('stick')
      }else{
          $('.header_b').removeClass('stick')
      }     
    }else{
      if(scroll >$headerTop ){
        $('.header_top ').addClass('stick')
      }else{
        $('.header_top').removeClass('stick')
      }  
    }
   });

 
  if(winW > 768){
    console.log($(window).width());

    $('.gnb>li').mouseover(function(){
      $(this).find('.sub_menu').stop().slideDown(500);
    });
    $('.gnb>li').mouseleave(function(){
      $(this).find('.sub_menu').hide();
    });
  }else{
    $('.gnb>li').click(function(){
      $(this).find('.sub_menu').stop().slideToggle(500);
    });
  }
/*mobile GNB*/
  $('.button').click(function(){
    $('.header_b').animate({right:0},500);

  })


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