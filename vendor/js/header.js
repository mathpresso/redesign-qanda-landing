// 현재 경로에 맞게 네비게이션 바 활성화 적용
$(document).ready(function() {
  var current_path = window.location.pathname.split("/").reverse()[1];
  $("#"+current_path).addClass("active");
});

$(document).ready(function() {
  var activeHeaderItem = $(".header-menu .active");
  $(".header-item").hover(
    function() { activeHeaderItem.removeClass("active"); },
    function() { activeHeaderItem.addClass("active"); }
  )
});