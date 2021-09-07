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
          $('.header_b').addClass('stick').removeAttr('style');
        }
        $('.header_top').attr('class','header_top');
      });
      //mainslides
        $('#slidesjs-container').attr({'width': 1440,'height': 750})

    }else{
      //stick
      $(window).scroll(function(){
        $('.header_top').addClass('stick');
        $('.header_b').attr('class','header_b');
      });
      //mainslides
      $('#slides').css('min-width','640px','height','auto');
      $('.slidesjs-container').css('width','390px','height','450px');
      $('.slidesjs-control').css('width','390px','height','450px');


    }
  });

} );