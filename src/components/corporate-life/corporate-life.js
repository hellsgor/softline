import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  spaceBetween: 100,
});
