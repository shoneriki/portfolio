// $(document).ready(function () {
//   $('.menu-toggler').on('click', function() {
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//   })
// })

function toggle() {
  const toggler = document.querySelector('.menu-toggler');
  const topNav = document.querySelector('.top-nav');
  const landing = document.querySelector('.landing-text');
  toggler.classList.toggle("open");
  topNav.classList.toggle("open");
  if (topNav.classList.contains('open')) {
    landing.style.display = 'none';
  } else {
    landing.style.display = 'block';
  }
}
// toggle()
