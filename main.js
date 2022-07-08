const menuIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.body;

menuIcon.addEventListener('click',(e)=>{
    body.classList.toggle('active');
    menu.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
  