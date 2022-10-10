import Map from "./scripts/map"
import Trends from "./scripts/trends"
import Swiper from '../node_modules/swiper/swiper-bundle.esm';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("regions_div");
  const map = new Map();
  const trends = new Trends();
  
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 100,
    loop: true,
    mousewheel: true,
    keyboard: true,
    navigation: {
      nexEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});