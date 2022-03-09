$(document).ready(function() {
    $(".btn1").click(function() {
      var idx = $(this).index();
      $(".navbar_menu_item").removeClass("active");
      $(".navbar_menu_item").eq(idx).addClass("active");
      

      $("#about, #skill, #work, #animation, #screen").animate({
          opacity: 1
        });
    })
  });

$(document).ready(function() {
    $(".btn2").click(function() {
      var idx = $(this).index();
      $(".navbar_menu_item").removeClass("active");
      $(".navbar_menu_item").eq(idx).addClass("active");
      

      $("#skill, #work, #animation, #screen").animate({
          opacity: 0.2
        });
      $("#about, #skill, #screen").animate({
            opacity: 1
          });
    })
  });

$(document).ready(function() {
    $(".btn3").click(function() {
      var idx = $(this).index();
      $(".navbar_menu_item").removeClass("active");
      $(".navbar_menu_item").eq(idx).addClass("active");
      
    
      $("#about, #skill, #animation, #screen").animate({
          opacity: 0.2
        });
      $("#work, #screen").animate({
          opacity: 1
        });
    })
  });

$(document).ready(function() {
    $(".btn4").click(function() {
      var idx = $(this).index();
      $(".navbar_menu_item").removeClass("active");
      $(".navbar_menu_item").eq(idx).addClass("active");
      
    
      $("#about, #skill, #work, #screen").animate({
          opacity: 0.2
        });
      $("#animation, #screen").animate({
          opacity: 1
        });
    })
  });

