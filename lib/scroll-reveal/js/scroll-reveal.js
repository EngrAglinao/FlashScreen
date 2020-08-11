$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

// Animate Navbar
window.sr = ScrollReveal();
sr.reveal('.navbar',{
  duration: 2000,
  origin: 'bottom'
});
