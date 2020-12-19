$(document).ready(() => {
  $('.menu-toggler').on('click', () => {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});
