//= require jquery;
window.addEventListener('DOMContentLoaded', function() {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



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
