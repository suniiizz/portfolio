//All
$(document).ready(function() {
  $(".btn1").click(function() {
    var idx = $(this).index();
    $(".navbar_menu_item").removeClass("active");
    $(".navbar_menu_item").eq(idx).addClass("active");
    

    $("#about, #skill, #work, #animation, #screen").animate({
        opacity: 1
    });
    
    $(".about, .skill, .animation_grid_1, .animation_grid_2, .animation_grid_3 , .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").removeClass("active_btn2 active_btn3 active_btn4");
  })
});

//About
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

    $(".skill, .animation_grid_1, .work_grid_1, .work_grid_3, #screen").addClass("active_btn2");
    $(".about, .skill, .animation_grid_1, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").removeClass("active_btn3");
    $(".about, .skill, .work_grid_1, .work_grid_3, .animation_grid_2, .animation_grid_3, #screen").removeClass("active_btn4");
  })
});

//Project
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
    
    $(".about, .skill, .animation_grid_1, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").addClass("active_btn3");
    $(".skill, .animation_grid_1, .work_grid_1, .work_grid_3, #screen").removeClass("active_btn2");
    $(".about, .skill, .work_grid_1, .work_grid_3, .animation_grid_2, .animation_grid_3, #screen").removeClass("active_btn4");
  })
});

//Animation
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

    $(".about, .skill, .work_grid_1, .work_grid_3, .animation_grid_2, .animation_grid_3, #screen").addClass("active_btn4");
    $(".skill, .animation_grid_1, .work_grid_1, .work_grid_3, #screen").removeClass("active_btn2");
    $(".about, .skill, .animation_grid_1, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").removeClass("active_btn3");
  })
});

