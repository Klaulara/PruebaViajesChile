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
        if (scroll > 300) {
          $(".navbar").css("background" , "transparent");
        }
  
        else{
            $(".navbar").css("background" , "black");  	
        }
    })
  })

