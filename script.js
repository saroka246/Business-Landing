var btnContainer = document.getElementById("btnList");

var btns = btnContainer.getElementsByClassName("Ellipse");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("Ellipse-active");
    current[0].className = current[0].className.replace(" Ellipse-active", "");
    this.className += " Ellipse-active";
  });
}
$(document).ready(function () {
        $(".second_div").hide();
        $(".third_div").hide();
            $(".btn1").click(function () {
                $(".second_div").hide();
                $(".third_div").hide();
                $(".first_div").show()
            });
          $(".btn2").click(function () {
                $(".first_div").hide();
                $(".third_div").hide();
                $(".second_div").show()
        });
    $(".btn3").click(function () {
                $(".first_div").hide();
                $(".second_div").hide();
                $(".third_div").show()
        });
     });