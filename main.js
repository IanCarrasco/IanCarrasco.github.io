$(document).ready(()=>{

  $('.section-header').addClass('animated');
  $('#site-title').addClass('animated');
  $('.fa').addClass('fadeInUp animated');
  setTimeout(()=>{
    
    $('.section-header').removeClass('animated');
    $('#site-title').removeClass('animated');
    $('.fa').removeClass('fadeInUp animated');

  }, 3000)

})


console.log("hello")