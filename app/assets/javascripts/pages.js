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
    setTimeout(function(){
      $('.tv-image1').fadeOut();
    },3500);
    setTimeout(function(){
      $('.tv-image2').fadeOut();
    },4000);
    setTimeout(function(){
      $('.tv-portfolio-image-01').fadeOut();
    },1000);
    setTimeout(function(){
      $('.tv-portfolio-image-02').fadeOut();
    },2000);
    setTimeout(function(){
      $('.tv-masaki-image-01').fadeOut();
    },1500);
    setTimeout(function(){
      $('.tv-masaki-image-02').fadeOut();
    },2500);
    setTimeout(function(){
      $('.tv-murakami-image-01').fadeOut();
    },2000);
    setTimeout(function(){
      $('.tv-murakami-image-02').fadeOut();
    },3000);
  })
});