var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
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
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>550){
            $("nav").css("background-color", "black");
        }
        else {
            $("nav").css("background-color", "transparent");
        }
    });
  });

