$(function(){
  let btns = $(".portfolio-btn");
  function channelSelect(){
    const index = btns.index(this);
    $(".active").removeClass("active")
    $(this).addClass("active")
    $(".portfolio-image").removeClass("show").eq(index).addClass("show");
    $(".portfolio-image").addClass("hide").eq(index).removeClass("hide");
    $('.show').css('z-index', '6');
    $('.hide').css('z-index', '1');
  };
  btns.mouseenter(channelSelect); 
});

$(function()  {
  $(window).load(function(){
    $('.show').show();
    $('body').css('overflow', 'hidden');
    setTimeout(function(){
      $('.tv-portfolio-image-01').fadeOut();
    },1000);
    setTimeout(function(){
      $('.tv-masaki-image-01').fadeOut();
    },1500);
    setTimeout(function(){
      $('.tv-portfolio-image-02').fadeOut();
      $('.tv-murakami-image-01').fadeOut();
    },2000);
    setTimeout(function(){
      $('.tv-masaki-image-02').fadeOut();
    },2500);
    setTimeout(function(){
      $('.tv-murakami-image-02').fadeOut();
    },3000);
    setTimeout(function(){
      $('.tv-image1').fadeOut();
    },3500);
    setTimeout(function(){
      $('.tv-image2').fadeOut();
    },4000);
    setTimeout(function(){
      $('body').css('overflow', 'auto');
    },5000);
  })
});

$(function(){
  $('.works-1').one('mouseenter', function() {
    $('.works-image-2').animate({'top':'-100%','left':'0'},3000);
    setTimeout(function(){
      $('.works-image-1').hide();
      $('.works-image-2').hide();
    },2500);
    setTimeout(function(){
      $('.chat-space-1').fadeIn(2000);
      $('.chat-space-2').fadeIn(2000);
    },1500);
  })
})

$(function(){
  $('.works-2').one('mouseenter', function() {
    $('.works-image-4').animate({'top':'-100%','left':'0'},3000);

    setTimeout(function(){
      $('.works-image-3').hide();
      $('.works-image-4').hide();
    },2500);
    setTimeout(function(){
      $('.mercari-1').fadeIn(2000);
      $('.mercari-2').fadeIn(2000);
    },1500);
  })
})

$(function(){
  $('.works-3').one('mouseenter', function() {
    $('.works-image-6').animate({'top':'-100%','left':'0'},3000);

    setTimeout(function(){
      $('.works-image-5').hide();
      $('.works-image-6').hide();
    },2500);
    setTimeout(function(){
      $('.apparel-web-1').fadeIn(2000);
      $('.apparel-web-2').fadeIn(2000);
    },1500);
  })
})

$(function(){
  $('.profile').one('mouseenter', function() {
    $('.profile-photo-3').fadeIn(1000);
    $('.profile-photo-3').animate({'top':'21%','left':'25%'},1000);
    $('.profile-photo-3').css({
      'transform': 'rotateY(0deg)'
    });
    setTimeout(function(){
    $('.profile-photo-2').fadeIn(1000);
    $('.profile-photo-2').animate({'top':'21%','left':'20%'},1000);
    $('.profile-photo-2').css({
      'transform': 'rotateY(0deg)'
    });
    },2000);
    setTimeout(function(){
    $('.profile-photo-1').fadeIn(1000);
    $('.profile-photo-1').animate({'top':'21%','left':'15%'},1000);
    $('.profile-title').show()
    $('.profile-description').show()
    $('.profile-title').animate({'top':'5%','right':'18%'},3000);
    $('.profile-description').animate({'top':'24%','right':'11.4%'},3000);
    $('.profile-photo-1').css({
      'transform': 'rotateY(0deg)'
    });
    },4000);
    setTimeout(function(){
    $('.profile-photo-1').animate({'top':'21%','left':'5%'},1000);
    $('.profile-photo-3').animate({'top':'21%','left':'35%'},1000);
    },6000);
  });
})  