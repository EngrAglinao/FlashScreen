$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});

window.sr = ScrollReveal();
sr.reveal('.navbar',{
  duration: 2000,
  origin: 'bottom'
})
