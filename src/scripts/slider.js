import Swiper from '../../node_modules/swiper/swiper-bundle.esm';

export default class Slider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
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
    })
  }
}