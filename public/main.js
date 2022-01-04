$(document).ready(function () {
  $(".nav-links li a").mouseenter(function () {
    $(this).next().slideDown();
  });

  $(".nav-links li").mouseleave(function () {
    $(".sub-menu").slideUp();
  });
});

$(document).ready(function () {
  $(".menu .menu-item").click(function () {
    $(".menu .dropdown").slideToggle();
  });
});
