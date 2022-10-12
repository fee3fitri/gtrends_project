import Swiper from '../../node_modules/swiper/swiper-bundle.esm';

export default class Slider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      speed: 900,
      spaceBetween: 100,
      loop: true,
      keyboard: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    this.reloadPage();
  }

  reloadPage() {
    const bullet = document.querySelector('.swiper-pagination-bullet');
    bullet.addEventListener("click", function() {
      location.reload();
    }.bind(location));
  }
}