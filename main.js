// animation navbar
// $(function() {
//     $(".active").on("click", function() {
//         $("#skill, #work, #animation, #screen").animate(
//           {
//             opacity: 0.2
//           }
//         );
//     });
// });

// $(document).ready(function(){
   
//     $('.navbar_menu_item').click(function(){
//       var tab_id = $(this).attr('data-tab');
   
//       $('.navbar_menu_item').removeClass('active');
//       $('.work2').removeClass('active');
   
//       $(this).addClass('active');
//       $("#"+tab_id).addClass('active');

//       $(".work_grid_1").animate({opacity: 0.2});
//     })

//   })

// $(document).ready(function(){
   
//     $('.btn2').click(function(){
//       var tab_id = $(this).attr('data-tab');
   
//       $('.btn2').removeClass('active');
//       $('.work2').removeClass('active');
   
//       $(this).addClass('active');
//       $("#"+tab_id).addClass('active');

//       $("#skill, #work, #animation, #screen").animate({opacity: 0.2});
//     })
    
// })
// $(document).ready(function(){
   
//     $('.btn1').click(function(){
//       var tab_id = $(this).attr('data-tab');
   
//       $('.btn1').removeClass('active');
//       $('.work2').removeClass('active');
   
//       $(this).addClass('active');
//       $("#"+tab_id).addClass('active');

//       $("#skill, #work, #animation, #screen").animate({opacity: 1});
//     })
    
// })

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
      $("#about, #screen").animate({
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

// $(document).ready(function() {
//     $(".navbar_menu_item").click(function() {
//       var idx = $(this).index();
//       $(".navbar_menu_item").removeClass("active");
//       $(".navbar_menu_item").eq(idx).addClass("active");
      

//       $(".work_grid_1").animate({opacity: 0.2});
//     })
//   });




// const active = document.querySelector('.navbar_menu_item.selected');
//     active.classList.remove('selected');
//     e.target.classList.add('selected');

// $(function() {
//     $(".navbar_menu_item").on("click", function() {
//       $("#skill").fadeTo(2000, 0.2);
//       $("#work").fadeTo(2000, 0.4);
//       $("#animation").fadeTo(2000, 0.6);
//       $("#screen").fadeTo(2000, 0.8);
//     })
//   });

