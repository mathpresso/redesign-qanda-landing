$(document).ready(function() {
  $(window).on("scroll", count_up_animation);
  $(window).on("scroll", page3_bottom_up_animation);
});

function count_up_animation() {
  var scroll_top_offset = $(window).scrollTop();
  var cover_top_offset = $('.cover').offset().top;
  if (scroll_top_offset > cover_top_offset + 100) {
    $(".count-up").countTo({
      // from: 0,
      // to: 1000,
      // speed: 2000, // (단위: ms)
      refreshInterval: 20,
      formatter: function (value, options) {
        value = value.toFixed(options.decimals);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return value;
      },
      onUpdate: function (value) {
      },
      onComplete: function (value) {
      }
    });
    $(window).off("scroll", count_up_animation);
  } else {
  }
}

function page3_bottom_up_animation() {
  var scroll_top_offset = $(window).scrollTop();
  var page1_top_offset = $('.page1').offset().top;
  if (scroll_top_offset > page1_top_offset + 100) {
    $(".page2 .title, .page2 .desc").addClass("bottom-up-animation-1500ms");
    $(".page2 .img-container").addClass("hover-animation-2000ms");
  }
}