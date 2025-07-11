const burgerBtn = document.querySelector('#burgerBtn')
const burgerMenu = document.querySelector('#burger')
const burgerList = document.querySelector('.burger__list')
const body = document.querySelector('body')
const burgerClose = document.querySelector('#burger__close')
const burgerLink = document.querySelectorAll('#burgerLink')


burgerBtn.addEventListener('click', function(){
  body.style.overflow = 'hidden'
  burgerMenu.classList.add('burger__active')
  burgerList.classList.add('burger__list_active')
})

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger__active')
  body.style.overflow = 'auto'
}

burgerClose.addEventListener('click', closeBurgerMenu)

burgerLink.forEach(el => {
  el.addEventListener('click', closeBurgerMenu)
})



document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-header__icon'); // Находим иконку в текущем заголовке
      const isOpen = content.classList.contains('open');

      // Закрываем все другие аккордеоны и возвращаем их иконки
      document.querySelectorAll('.accordion-content.open').forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove('open');
          
          // Находим иконку в заголовке соседнего аккордеона
          const otherHeader = openContent.previousElementSibling;
          const otherIcon = otherHeader.querySelector('.accordion-header__icon');
          if (otherIcon) {
            otherIcon.style.display = 'block'; // или 'inline' в зависимости от типа иконки
          }
        }
      });

      // Переключаем текущий аккордеон
      content.classList.toggle('open', !isOpen);

      // Управляем видимостью иконки текущего заголовка
      if (icon) {
        icon.style.display = content.classList.contains('open') ? 'none' : 'block';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  const extraContent = document.querySelector('.extra-content');

  toggleButton.addEventListener('click', function() {
    
      extraContent.classList.toggle('visible');

      if (extraContent.classList.contains('visible')) {
          toggleButton.textContent = 'Скрыть';
      } else {
          toggleButton.textContent = 'Читать больше';
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const swiperContainer = document.querySelector('.swiper-container');
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  const pagination = document.querySelector('.swiper-pagination');
  let currentIndex = 0;

  // Создаем пагинацию
  swiperSlides.forEach((slide, index) => {
      const bullet = document.createElement('div');
      bullet.classList.add('swiper-pagination-bullet');
      if (index === currentIndex) {
          bullet.classList.add('active');
      }
      bullet.addEventListener('click', () => {
          goToSlide(index);
      });
      pagination.appendChild(bullet);
  });

  function goToSlide(index) {
      currentIndex = index;
      const offset = -currentIndex * 100;
      swiperWrapper.style.transform = `translateX(${offset}%)`;

      // Обновляем активный bullet
      const bullets = document.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach((bullet, i) => {
          bullet.classList.toggle('active', i === currentIndex);
      });
  }
});






