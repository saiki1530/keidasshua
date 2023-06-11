$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() >40 ) { 
        $(".navbar-fixed-top").css("background-color", "#0a0a12");
        

      }else {
        $(".navbar-fixed-top").css("background-color", "transparent"); 
      }
    });
  });