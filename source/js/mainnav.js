var mainNav = document.querySelector('.main-nav');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    burger.classList.remove('burger--closed');
    burger.classList.add('burger--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    burger.classList.add('burger--closed');
    burger.classList.remove('burger--opened');
  }
})
