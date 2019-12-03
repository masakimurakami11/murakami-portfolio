$(function(){
  let btns = $(".portfolio-btn");
  function channelSelect(){
    const index = btns.index(this);
    $(".active").removeClass("active")
    $(this).addClass("active")
    $(".portfolio-image").removeClass("show").eq(index).addClass("show");
    $(".portfolio-image").addClass("hide").eq(index).removeClass("hide");
    $('.show').css('z-index', '5');
    $('.hide').css('z-index', '1');
  };
  btns.mouseenter(channelSelect); 
});

$(function()  {
  $(window).load(function(){
    $('.show').show();
    setTimeout(function(){
      $('.tv-image').fadeOut();
    },2000);
    setTimeout(function(){
      $('.tv-portfolio-image-0').fadeOut();
    },3000);
    setTimeout(function(){
      $('.tv-masaki-image-0').fadeOut();
    },3500);
    setTimeout(function(){
      $('.tv-murakami-image-0').fadeOut();
    },4000);
  })
});

