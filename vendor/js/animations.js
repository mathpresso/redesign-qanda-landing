// $(document).ready(function() {
  // // Scroll horizontally when scrolling vertically in question-container-wrapper
  // var scroller = $("#scroller");
  // scroller.on("mousewheel DOMMouseScroll", function(event) {
  //   var steps = scroller.scrollLeft(scroller.scrollLeft() +
  //       (event.originalEvent.wheelDelta/2 || -20 * event.originalEvent.detail));
  //       // Firefox doesn't have `mousewheel`, `wheelDelta`
  //   return console.log(steps);
  // });
  //
  // Prevent scroll event outside of question-container-wrapper
  // scroller.hover(
  //   function() {
  //     $("body").addClass("stop-scrolling");
  //   },
  //   function() {
  //     $("body").removeClass("stop-scrolling");
  //   }
  // )
// }

$(document).ready(function () {
  $(".cover .title, .cover .desc, .cover .btn-container").addClass("bottom-up-animation-1500ms");
  setTimeout(function() {
    $(".cover .img-container, .cover .img-content").addClass("hover-animation-2000ms");
  }, 1500);


  var question_slide_btn_right = $(".page1 .btn-slider-wrapper .slide-btn.right");
  var question_slide_btn_left = $(".page1 .btn-slider-wrapper .slide-btn.left");
  question_slide_btn_left.on("click", function () {
    var slide_holder = $(".page1 .slide-holder");
    var current_posX = slide_holder.css("transform").split(/[()]/)[1].split(",")[4].trim();

    if (current_posX < 0) {
      // 슬라이드 아이템의 크기(438px)만큼 이동한다.
      slide_holder.css("transform", "translateX(" + (parseInt(current_posX) + 876) + "px)");
      // 애니메이션이 끝난 뒤에 버튼 숨김 여부를 체크한다.
      setTimeout(function () {
        btn_show_and_hide("page1", -5200)
      }, 200);
    }
  });
  question_slide_btn_right.on("click", function () {
    var slide_holder = $(".page1 .slide-holder");
    var current_posX = slide_holder.css("transform").split(/[()]/)[1].split(",")[4].trim();

    if (current_posX > -5200) {
      slide_holder.css("transform", "translateX(" + (parseInt(current_posX) - 876) + "px)");
      setTimeout(function () {
        btn_show_and_hide("page1", -5200)
      }, 200);
    }
  });

  var review_slide_btn_right = $(".page5 .btn-slider-wrapper .slide-btn.right");
  var review_slide_btn_left = $(".page5 .btn-slider-wrapper .slide-btn.left");
  review_slide_btn_left.on("click", function () {
    var slide_holder = $(".page5 .slide-holder");
    var current_posX = slide_holder.css("transform").split(/[()]/)[1].split(",")[4].trim();

    if (current_posX < 0) {
      // 슬라이드 아이템의 크기(438px)만큼 이동한다.
      slide_holder.css("transform", "translateX(" + (parseInt(current_posX) + 876) + "px)");
      // 애니메이션이 끝난 뒤에 버튼 숨김 여부를 체크한다.
      setTimeout(function () {
        btn_show_and_hide("page5", -6300)
      }, 200);
    }
  });
  review_slide_btn_right.on("click", function () {
    var slide_holder = $(".page5 .slide-holder");
    var current_posX = slide_holder.css("transform").split(/[()]/)[1].split(",")[4].trim();

    if (current_posX > -6300) {
      slide_holder.css("transform", "translateX(" + (parseInt(current_posX) - 876) + "px)");
      setTimeout(function () {
        btn_show_and_hide("page5", -6300)
      }, 200);
    }
  });

  var question_detail_btn = $(".page1 .slide-item");
  question_detail_btn.on("click", function () {
    $(".question-detail-container").css("display", "block");
    $("body").addClass("stop-scrolling");
  });

  var cancel_btn = $(".cancel-detail-btn");
  cancel_btn.on("click", function () {
    $(".question-detail-container").css("display", "none");
    $("body").removeClass("stop-scrolling");
  });

});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  // if (y > 0) {
  //   console.log("gooood");
  //   addClass($(".container-2 .text"), "bottom-up");
  // } else {
  //   console.log(y);
  //   $(".container-2 .text").removeClass("bottom-up");
  // }


  if (y > 600) {
    // 숫자 올라가는 애니메이션

  }

  if (y > 460) {
    console.log(y);
    $(".question-holder .question").slice(0, 3).each(function(i) {
      console.log(i);
      var e = $(this);
      e.addClass("top-down-"+(100-25*i)+"-animation");

      // setTimeout(function() {
      //   // e.addClass("top-down-"+(100-25*i)+"-animation");
      //   e.addClass("from-right-animation");
      // }, i * 400);
    });
  } else {

  }
});

var addClass = function(jquery_obj, class_name) {
  jquery_obj.addClass(class_name);
};

var btn_show_and_hide = function(target, max_offset) {
  var slide_btn_left = $("."+target+" .btn-slider-wrapper .slide-btn.left");
  var slide_btn_right = $("."+target+" .btn-slider-wrapper .slide-btn.right");
  var current_posX = $("."+target+" .slide-holder").css("transform").split(/[()]/)[1].split(",")[4].trim();

  if (current_posX < 0) {
    slide_btn_left.css("opacity", "1");
    slide_btn_left.css("display", "inherit");
  } else {
    slide_btn_left.css("opacity", "0");
    slide_btn_left.css("display", "none");
  }

  if (current_posX < max_offset) {
    slide_btn_right.css("opacity", "0");
    slide_btn_right.css("display", "none");
  } else {
    slide_btn_right.css("opacity", "1");
    slide_btn_right.css("display", "inherit");
  }
};
