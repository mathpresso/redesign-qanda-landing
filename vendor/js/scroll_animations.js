$(document).ready(function() {
  $(window).on("scroll", count_up_animation);
});

$(document).ready(function () {
  $(window).on("scroll", bottom_up_and_hover_when_scrolling_animation);
});

$(document).ready(function () {
  $(window).on("scroll", card_slide_animation);
});

// 카드 펴는 듯한 애니메이션
function card_slide_animation() {
  if ($(".home.page1").position().top - 300 < $(window).scrollTop()) {
    var slide_items = $(".page1 .slide-holder .slide-item");
    slide_items.removeClass("hidden");
    slide_items.slice(0, 4).each(function(i) {
      console.log(i);
      var e = $(this);
      e.css("z-index", 4-i);
      e.addClass("question-slide-animation-"+(i+1));
    });
    // 라우팅 후 한 번만 실행된다.
    $(window).off("scroll", card_slide_animation);
  } else {

  }
}

// 숫자 올라가는 애니메이션
function count_up_animation() {
  if ($(".home.page1").position().top - 500 < $(window).scrollTop()) {
    $(".home.page1 .count-up").countTo({
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

// home-page2: 텍스트 bottom-up 후, 이미지 둥둥 뜨는 애니메이션
function bottom_up_and_hover_when_scrolling_animation() {
  if ($(".home.page2").position().top - 400 < $(window).scrollTop()) {
    $(".home.page2 .title, .page2 .desc").addClass("bottom-up-animation-1500ms");
    $(".home.page2 .img-container").addClass("hover-animation-2000ms");
  }
}