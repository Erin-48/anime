$(document).ready(function () {
  $("nav .nav-links > li").click(function (e) {
    $("nav .nav-links > li").removeClass("active");
    $(this).addClass("active");
  });
});
