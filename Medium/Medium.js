$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 180) {
            $(".navbar-renk").css(
                {
                    "background-color": "white",
                    "transition": "all 1s"
                }
            );
            $(".btn-started").css({
                "background-color" : "green",
                "transition": "all 1s"
            })
        }
        else {
            $(".navbar-renk").css({ "background-color": "#C4E2FF", "transition": "all 1s" });
            $(".btn-started").css({"background-color" : "#23272B", "transition": "all 1s"})
        }
    });
});