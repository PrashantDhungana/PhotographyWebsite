$(function() {

    $(window).scroll(function() {
  
      var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
      $('.background-img h1').css('transform', 'scale(' + mass + ')');
      $('body').css('overflow-x','hidden')

      $('.background-img button').css('margin-top', '40px');
    });
  });

// $('.btn-primary').click(function(){

//   $('body').css('background-color',"red");
//   $('body').css('margin-top',"20px");
//   $('body').css('position',"relative");
//   $('body').css('z-index',"1");
  

// })

$('.view-offers').click(function(){
$('.bg-offers-popup').css('display',"flex")
$('body').css('height', "100%")
$('body').css('overflow-y','hidden')
})

$('.about-us').click(function(){
  $('.bg-aboutus-popup').css('display',"flex")
  $('body').css('height', "100%")
  $('body').css('overflow-y','hidden')
  })
  
$('.close').click(function(){
  $('.bg-offers-popup').css('display',"none");
  $('.bg-aboutus-popup').css('display',"none");
  $('body').css('height', "")
  $('body').css('overflow-y','')
})