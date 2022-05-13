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
        opacity: 0.3
    });
    $("#about, #skill, #screen").animate({
        opacity: 1
    });

    $(".skill, .animation_grid_1, .animation_grid_2, .animation_grid_3, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").addClass("active_btn2");
    $(".about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .animation_grid_1, .animation_grid_2, .animation_grid_3, #screen").removeClass("active_btn3 active_btn4");
  })
});

//Project
$(document).ready(function() {
  $(".btn3").click(function() {
    var idx = $(this).index();
    $(".navbar_menu_item").removeClass("active");
    $(".navbar_menu_item").eq(idx).addClass("active");
    
  
    $("#about, #skill, #animation, #screen").animate({
        opacity: 0.3
      });
    $("#work, #screen").animate({
        opacity: 1
      });
    
    $(".about, .skill, .animation_grid_1, .animation_grid_2, .animation_grid_3, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, #screen").addClass("active_btn3");
    $(".about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .animation_grid_1, .animation_grid_2, .animation_grid_3, #screen").removeClass("active_btn2 active_btn4");
  })
});

//Animation
$(document).ready(function() {
  $(".btn4").click(function() {
    var idx = $(this).index();
    $(".navbar_menu_item").removeClass("active");
    $(".navbar_menu_item").eq(idx).addClass("active");
    
  
    $("#about, #skill, #work, #screen").animate({
        opacity: 0.3
      });
    $("#animation, #screen").animate({
        opacity: 1
      });

    $(".about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .animation_grid_1, .animation_grid_2, .animation_grid_3, #screen").addClass("active_btn4");
    $(".about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .animation_grid_1, .animation_grid_2, .animation_grid_3, #screen").removeClass("active_btn2 active_btn3");
  })
});

// Screen
$(".switch_btn").on("change", function() {
	if ( $(this).is(":checked") == true ) {
		$("html, .navbar_menu, .navbar_menu_item, .about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .project_bg, .work_tit h2, .work_btn, .animation_grid_1, .animation_grid_2, .animation_grid_3, .scan, #screen").addClass("dark");
	} else {
		$("html, .navbar_menu, .navbar_menu_item, .about, .skill, .work_grid_1, .work_grid_2, .work_grid_3, .work_grid_4, .project_bg, .work_tit h2, .work_btn, .animation_grid_1, .animation_grid_2, .animation_grid_3, .scan, #screen").removeClass("dark");
	}
});
// is - 주어진 선택자의 형태를 판별해줌
