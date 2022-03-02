 $(function () {
   var swiper1 = new Swiper(".slide1", {
     navigation: {
       nextEl: ".s1_next",
       prevEl: ".s1_prev",
     },
     pagination: {
       el: ".swiper-pagination",
       dynamicBullets: true,
     },

     centeredSlides: true,
     slidesPerView: 3,
     spaceBetween: 0,
     breakpoints: {
       400: {
         slidesPerView: 2,
         spaceBetween: 30,
       },
       600: {
         slidesPerView: 4,
         spaceBetween: 40,
       },
       1024: {
         slidesPerView: 5,
         spaceBetween: 50,
       },
     },
     effect: "coverflow",
     coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 5,
       modifier: 1,
       slideShadows: true,
     },
   });

   $('.fot_gnbcon').on('click',function(){
     $('.fot_dep2').toggleClass('on')
   })

   $('.but_o').on('click', function(){
    $('.gnb').toggleClass('on')
    $('.gnb_con').toggleClass('on')
})

 })