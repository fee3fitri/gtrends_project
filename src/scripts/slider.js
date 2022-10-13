import Swiper from '../../node_modules/swiper/swiper-bundle.esm';
import Year from './year'

export default class Slider {
  constructor(year) {
    this.swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      grabCursor: true,
      observeSlideChildren: true,
      speed: 900,
      spaceBetween: 100,
      loop: true,
      keyboard: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    this.swiper.on('slideChange', function() {
      year.createGrid();
    })
    
    this.reloadPage();
  }

  reloadPage() {
    const bullet = document.querySelector('.swiper-pagination-bullet');
    bullet.addEventListener("click", function() {
      location.reload();
    }.bind(location));
  }
}