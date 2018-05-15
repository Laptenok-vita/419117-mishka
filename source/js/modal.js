var siteListButton = document.querySelector('.main-nav__toggle');
var siteListMenu = document.querySelector('.main-nav');

siteListMenu.classList.remove('main-nav--nojs');
siteListMenu.classList.add('main-nav--closed');

siteListButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (siteListMenu.classList.contains('main-nav--closed')) {
    siteListMenu.classList.remove('main-nav--closed');
    siteListMenu.classList.add('main-nav--open');
  } else {
    siteListMenu.classList.add('main-nav--closed');
    siteListMenu.classList.remove('main-nav--open');
  }
});

var modalButton = document.querySelector('.knitted-baskets__order');
var modalForm = document.querySelector('.modal');
var modalOverlay =  document.querySelector('.modal__overlay');

if (modalForm) {
  modalForm.classList.remove('modal--nojs');
  modalOverlay.classList.remove('modal__overlay--nojs');
}

if (modalButton) {
  modalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal--closed');
    modalOverlay.classList.remove('modal__overlay--closed');
    modalForm.classList.add('modal--open');
    modalOverlay.classList.add('modal__overlay--open');
  })
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalForm.classList.contains('modal--open')) {
      modalForm.classList.remove('modal--open');
      modalForm.classList.add('modal--closed');
      modalOverlay.classList.remove('modal__overlay--open');
      modalOverlay.classList.add('modal__overlay--closed');
    }
  }
});

if (modalOverlay) {
  modalOverlay.addEventListener('click', function (evt) {
    if (evt.click !='.modal') {
      evt.preventDefault();
      if (modalForm.classList.contains('modal--open')) {
        modalForm.classList.remove('modal--open');
        modalForm.classList.add('modal--closed');
        modalOverlay.classList.remove('modal__overlay--open');
        modalOverlay.classList.add('modal__overlay--closed');
      }
    }
  })
}
