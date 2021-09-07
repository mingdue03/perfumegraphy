$(document).ready( function(){
   
  var $headerB =$('.header_b').offset().top; 
  var $headerTop =$('.header_top').offset().top; 
  var winW= $(window).width();

//HEADER FIXED
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

//SUB MENU SLIDE DOWN
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
  $('.ham_btn').click(function(){
    $('.header_b').animate({right:0},500);
    $('.gnb_dim').fadeIn(200);
    
  });
  $('.gnb_dim').click(function(){
    $('.header_b').animate({right:'-56%'},500);
    $('.gnb_dim').fadeOut(200);
  });


/*slides*/
  if(winW > 768){
    $("#slides").slidesjs({
      width: 1440,
      height: 750,
      pagination: {
        active: true,
        effect: "fade"
      },
      play: {
        active: true,
        swap: true,
        effect: "fade",
        interval: 2000,
        auto: true
      }
    });
  }else{
    $("#slides").slidesjs({
      width: 390,
      height: 450,
      pagination: {
        active: true,
        effect: "fade"
      },
      navigation: {
        active: false
      },
      play: {
        active: true,
        swap: true,
        effect: "fade",
        interval: 2000,
        auto: true
      }
    });
  }  
//INTEREST -HEART
  $(".pro_img").mouseover(function(){
        $(this).find('.interest').fadeIn();
    }).mouseleave(function(){
        $(this).find('.interest').fadeOut();
  });

//MONTH
if(winW < 769){
  $(".month_product_wrap").slidesjs({
    width: 400,
    height: 400,
    pagination: {
      active: false,
      effect: "fade"
    },
    navigation: {
      active: true,
      effect: "slide"
    },
    play: {
      active: true,
      auto: true,
      interval: 2000,
      swap: true
    }
  });
}


$(window).resize(function(){
  var winW=$(window).width();
  if(winW>768){
      $('.slidesjs-container').removeAttr({'height':800});
      $('.header_b').removeClass('stick')
  }
});


  
} );