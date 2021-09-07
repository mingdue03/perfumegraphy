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
    //MAINSLIDES
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
    $('.gnb_dim, .logo').click(function(){
      $('.header_b').animate({right:'-56%'},500);
      $('.gnb_dim').fadeOut(200);
    });

    $('.gnb>li').click(function(){
      $(this).find('.sub_menu').stop().slideToggle(500);
    });
    //MAIN SLIDES
    $("#slides").slidesjs({
      width: 390,
      height: 450,
      pagination: {
        active: true,
        effect: "fade"
      },
      navigation: {
        active: false,
        effect: "slide"
      },
      play: {
        active: true,
        swap: true,
        effect: "fade",
        interval: 2000,
        auto: true
      }
    });

    //MONTH SLIDES
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









  //INTEREST -HEART
  $(".pro_img").mouseover(function(){
      $(this).find('.interest').fadeIn();
  }).mouseleave(function(){
      $(this).find('.interest').fadeOut();
  });











  //resize

  $(window).resize(function(){
    var winR=$(window).width();
    console.log(winR);
    if(winR>1440){
      //mainslides
      $('.visual').css('width','1440px','height','800px');
      $('#slides').attr('style','overflow: hidden; display: block; width : 1440px ; height : 800px');
      $('.slidesjs-container').attr('style','overflow: hidden; position: relative; width : 1440px; height : 800px');
      $('.slidesjs-control').attr('style','position: relative; left: 0px; width : 1440px; height : 800px');
    }else if(winR>1034){
      //mainslides
      $('.visual').css('width','1200px','height','700px');
      $('#slides').attr('style','overflow: hidden; display: block; width : 1200px ; height : 700px');
      $('.slidesjs-container').attr('style','overflow: hidden; position: relative; width : 1200px; height : 700px');
      $('.slidesjs-control').attr('style','position: relative; left: 0px; width : 1200px; height : 700px');

    }else if(winR>768 && winR<1035){
      //dimed
      $('.gnb_dim').removeAttr('style');
      //stick
      $(window).scroll(function(){
        var scrollH=$(window).scrollTop();
        if(scrollH>headerB){
          $('.header_b').addClass('stick').removeAttr('style');
        }
        $('.header_top').attr('class','header_top');
      });
      //mainslides
      $('.visual').css('width','960px','height','500px');
      $('#slides').attr('style','overflow: hidden; display: block; width : 960px ; height : 500px');
      $('.slidesjs-container').attr('style','overflow: hidden; position: relative; width : 960px; height : 500px');
      $('.slidesjs-control').attr('style','position: relative; left: 0px; width : 960px; height : 500px');

      //MONTH SLIDES
      $('.month_product_wrap').off('slidesjs');
      $('.month_product_wrap').removeAttr('style');

    }else{
      //stick
      $(window).scroll(function(){
        $('.header_top').addClass('stick');
        $('.header_b').attr('class','header_b');
      });
      //mainslides
      $('.visual').css('width','640px','height','700px');
      $('#slides').attr('style','overflow: hidden; display: block; width : 640px ; height : 700px');
      $('.slidesjs-container').attr('style','overflow: hidden; position: relative; width : 640px; height : 700px');
      $('.slidesjs-control').attr('style','position: relative; left: 0px; width : 640px; height : 700px');
      $('.slidesjs-navigation').hide();




    }
  });

} );