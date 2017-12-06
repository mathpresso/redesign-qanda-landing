//////////////////////////////////////
// Horizontal Scroller (Deprecated) //
//////////////////////////////////////
$(document).ready(function() {
  // Scroll horizontally when scrolling vertically in question-container-wrapper
  var scroller = $("#scroller");
  scroller.on("mousewheel DOMMouseScroll", function(event) {
    var steps = scroller.scrollLeft(scroller.scrollLeft() +
        (event.originalEvent.wheelDelta/2 || -20 * event.originalEvent.detail));
        // Firefox doesn't have `mousewheel`, `wheelDelta`
    return console.log(steps);
  });

  // // Prevent scroll event outside of question-container-wrapper
  // scroller.hover(
  //   function() {
  //     $("body").addClass("stop-scrolling");
  //   },
  //   function() {
  //     $("body").removeClass("stop-scrolling");
  //   }
  // )
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

  // if ( y < 100) {
  //   $(".question-holder .question").slice(0, 3).each(function(i) {
  //     console.log(i);
  //     var e = $(this);
  //     e.removeClass("top-down-"+(100-25*i)+"-animation");
  //   });
  // }
});

var addClass = function(jquery_obj, class_name) {
  jquery_obj.addClass(class_name);
};
