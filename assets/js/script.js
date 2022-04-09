$(document).ready(function(){
    $("a").click(function(){
        var gato = this.hash
        $("html, body").animate(
           { 
               scrollTop: $(gato).offset().top -70
           },
           800
        )
    });
})



$(window).scroll(function(){
    let nav = $("html").scrollTop();
    nav > 200 ? $("nav").css("background-color", "#0dcaf0") : $("nav").css("background-color", "transparent");
    });

