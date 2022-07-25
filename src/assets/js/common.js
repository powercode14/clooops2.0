// UI - TreeView
// UI - TreeView
// UI - TreeView
var toggler = document.getElementsByClassName("mn-link");
    var i;
    
    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("open");
        });
    }

// ui - gnb dropdown
// ui - gnb dropdown
const gnbButtons = document.querySelectorAll(".gnb-layer");

gnbButtons.forEach((gnbButton) => {
  gnbButton.addEventListener("click", () => {
    if (gnbButton.classList.contains("select")) {
      gnbButton.classList.remove("select");
    } else {
      const gnbButtonsWithIsOpen = document.querySelectorAll(".select");
      gnbButtonsWithIsOpen.forEach((gnbButtonWithIsOpen) => {
        gnbButtonWithIsOpen.classList.remove("select");
      });
      gnbButton.classList.add("select");
    }
  });
});

// 팝업 열기
$(document).on("click", ".btn-open", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show");
  });
  
  // 외부영역 클릭 시 팝업 닫기
  $(document).mouseup(function (e){
    var LayerPopup = $(".layer-popup");
    if(LayerPopup.has(e.target).length === 0){
      LayerPopup.removeClass("show");
    }
  });