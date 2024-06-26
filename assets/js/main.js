// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong. Make sure that ${selector} exists or is typed correctly.`);
};

// Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if (this.scrollY >= 15) {
    headerElement.classList.add('activated'); // add class
  } else {
    headerElement.classList.remove('activated'); // remove that class
  }
};

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form pop-up
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

// -- Close the search form pop-up on ESC keypress by removing .activated
window.addEventListener('keyup', event => {
  if (event.key === 'Escape') searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage (so browser remembers which theme you left off on)
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  // if currentTheme exists in localStorage, keep light theme
  bodyElement.classList.add('light-theme');
};

themeToggleBtn.addEventListener('click', () => {
  // on click, change theme by toggling light-theme class
  bodyElement.classList.toggle('light-theme');
  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
  } else {
    localStorage.removeItem('currentTheme'); // if set to dark, remove currentTheme from localStorage
  };
});

// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    700: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});