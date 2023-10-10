(function ($) {
  "use strict";

  $('.blog-list').masonry({
    itemSelector: '.article-item',
    // percentPosition: true,
    gutter: 20,
    resize: true,
  });

  // QUESTION
  $('.question-list-wrapper .c-nav .nav-item').click(function (e) {
    $(".question-list-wrapper").attr("topic", e.currentTarget.innerText);
    $('.question-list-wrapper .c-nav .nav-item').removeClass('active');
    $(e.currentTarget).addClass('active');
  })

  document.addEventListener("scroll", function () {
    let fixedArea = document.getElementsByClassName("fixed-area");
    let asides = document.getElementsByClassName("s-right");
    let outter = document.getElementsByClassName("stage");

    if(fixedArea) {
      fixedArea = fixedArea[0] || fixedArea;
    }

    if (fixedArea && fixedArea.clientHeight) {
      if (asides.length > 0 && outter.length > 0 && outter[0].offsetHeight - 60 > fixedArea.offsetHeight) {
        let aside = asides[0];
        let asideRect = aside.getBoundingClientRect();
        let rect = fixedArea.getBoundingClientRect();
        let top = asideRect.top;
        let viewHeight = fixedArea.clientHeight + top;
        if (top < 0 && viewHeight < window.innerHeight) {
          let clientWidth = rect.width;
          //当侧边栏的项目小于浏览器高度和内部可视化高度时
          $(fixedArea).addClass("fixed-this");
          fixedArea.style.width = clientWidth + "px";
          let changTop = () => {
            let min = Math.min(asideRect.bottom, window.innerHeight);
            if (min - 80 > rect.height) {
              fixedArea.style.bottom = "auto";
              fixedArea.style.top = "80px";
              return true;
            }
            return false;
          };
          //当滑到底部时则应该让其距底部的距离为侧边栏据底部的距离，防止挡住了底部栏
          if (asideRect.bottom < window.innerHeight) {
            if (!changTop()) {
              fixedArea.style.top = "auto";
              fixedArea.style.bottom = window.innerHeight - asideRect.bottom + "px";
            }
          } else {
            if (!changTop()) {
              fixedArea.style.top = "auto";
              fixedArea.style.bottom = "10px";
            }
          }
        } else {
          $(fixedArea).removeClass("fixed-this");
        }
      } else if (outter[0].offsetHeight - 60 <= fixedArea.offsetHeight) {
        $(fixedArea).removeClass("fixed-this");
      }
    }
  });
})(jQuery);