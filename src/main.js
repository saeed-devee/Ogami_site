import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperSlider = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    // autoplay:{
    //     delay: 4000
    // },

    effect: 'fade',
    fadeEffect: {
    crossFade: true,
    },

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const swiper = document.querySelector('.swiper').swiper;

