$(window).scroll(function(){
    let nav = $("html").scrollTop();
    nav > 200 ? $("nav").css("background-color", "#0dcaf0") : $("nav").css("background-color", "transparent");
    });