$(document).ready(function () {
  $('.menu-toggler').on('click',function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

//   $('nav a[href*="#"]').on('click', function () {
//     $('html, body').animate( keyframes: {
//       scrollTop: $($(this).attr('href')).offset().top - 100
//     }, options:2000);
//   });

//   $('#up').on('click', function () {
//     $('html, body').animate(keyframes:{
//       scrollTop: 0
//     }, options: 2000);
//   })
});

// function toggle() {
//   const toggler = document.querySelector('.menu-toggler');
//   const topNav = document.querySelector('.top-nav');

//   toggler.classList.toggle('open');
//   topNav.classList.toggle('open');
// }
// toggle();

// function closeNav() {
//   const toggler = document.querySelector('.menu-toggler');
//   const topNav = document.querySelector('.top-nav');

//   toggler.removeClass('open');
//   topNav.classList.removeClass('open');
// }
// closeNav()
