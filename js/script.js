$(document).ready(function(){

    $(window).on('scroll',function(){
        x = $(window).scrollTop()

        if(x>=200){
            $('#scroll_top').css('opacity','1')
        }
        else{
            $('#scroll_top').css('opacity','0')
        }
    })

    $('#scroll_top').click(function(){

        $(window).scrollTop({top:0})

    })
     
     $('.tablate-menu').hide();
     $('.tablate-sub-menu').hide();
     
     $('.menu-open').click(function(){
          
          $('.tablate-menu').slideToggle();

     });

     $('.tablate-menu > li > a').click(function(){

          $(this).next('.tablate-sub-menu').slideToggle();

     });

     // ------------sticky header--------------

          // When the user scrolls the page, execute myFunction
          window.onscroll = function() {myFunction()};

          // Get the header
          var header = document.getElementById("myHeader");

          // Get the offset position of the navbar
          var sticky = header.offsetTop;

          // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
          function myFunction() {
          if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          } else {
          header.classList.remove("sticky");
          }
     }

     $('#main-sli').owlCarousel({
          loop:true,
          autoplay:true,
          margin:10,
          nav:true,
          responsiveClass:true,
          dots:false,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:1,
                  nav:true
              },
              1000:{
                  items:1,
                  nav:true,
                  loop:true
              }
          }
      })

      $('#testimonial-sli').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    })
});