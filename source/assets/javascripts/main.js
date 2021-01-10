// $(document).ready(function () {
//   $('.menu-toggler').on('click', function() {
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//   })
// })

function toggle() {
  const toggler = document.querySelector('.menu-toggler');
  const topNav = document.querySelector('.top-nav');
  toggler.classList.toggle("open");
  topNav.classList.toggle("open");
}
// toggle()
