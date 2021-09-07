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
      play: {
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
var monthP =$('.month');
var proNumber=$('.month_product').length;
var imgW=$('.month_product img').width();

monthP.css({'width':proNumber*imgW});
setInterval(function(){
  monthP.animate({'margin-left':'-467px'},1000,function(){
    monthP.find('.month_product:nth-of-type(1)').insertAfter(monthP)
  })
})


var $sUl =$('#slider>ul');
var imgNumber=$('#slider li').length;

var imgW =$('#slider img').width();

$sUl.css({'width':imgNumber*imgW});
setInterval(function(){
  $sUl.animate({'margin-left':'-1080px'},1000,'swing',function(){
  $sUl.find('li:first-child').insertAfter($sUl.find('li:last-child'))
,$sUl.css({'margin-left':'0'})
});
},3000)



  
} );