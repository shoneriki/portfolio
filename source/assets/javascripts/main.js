//= require jquery;
// $(document).ready(function () {
//   $('.menu-toggler').on('click',function () {
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//   });

//   $('.top-nav .nav-link').on('click', function () {
//     $('.menu-toggler').removeClass('open');
//     $('.top-nav').removeClass('open');
//   });

//   // $('nav a[href*="#"]').on('click', function () {
//   //   $('html, body').animate( keyframes: {
//   //     scrollTop: $($(this).attr('href')).offset().top - 100
//   //   }, options:2000);
//   // });

//   // $('#up').on('click', function () {
//   //   $('html, body').animate(keyframes:{
//   //     scrollTop: 0
//   //   }, options: 2000);
//   // });
// });


// const toggler = document.querySelector('.menu-toggler');
// const openToggler = document.querySelector('.menu-toggler.open');
// const topNav = document.querySelector('.top-nav');
// const navList = document.querySelector('.nav-list');
// const navLink = document.querySelectorAll('.nav-link');

// function toggle() {
//   if (openToggler) {
//   toggler.addEventListener('click', () => {
//     toggler.classList.toggle('open');
//     topNav.classList.toggle('open');
//     });
//   }
// }



// function closeNav() {
//   toggler.removeClass('open');
//   navList.classList.removeClass('open');
// }

// navLink.addEventListener('click', closeNav());

// function toggle() {
//   const toggler = document.querySelector('.menu-toggler');
//   const topNav = document.querySelector('.top-nav');

//   toggler.classList.toggle('open');
//   topNav.classList.toggle('open');
// }
// toggle();

// function closeNav() {
//   const toggler = document.querySelector('.menu-toggler');
//   const navList = document.querySelector('.nav-list');


//   toggler.removeClass('open');
//   navList.classList.removeClass('open');
// }
// closeNav();
