var siteListButton = document.querySelector(".main-nav__toggle");
var siteListMenu = document.querySelector(".main-nav");

siteListMenu.classList.remove("main-nav--nojs");
siteListMenu.classList.add("main-nav__list--open");

siteListButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (siteListMenu.classList.contains("main-nav__list--closed")) {
    siteListMenu.classList.remove("main-nav__list--closed");
    siteListMenu.classList.add("main-nav__list--open");
  } else {
    siteListMenu.classList.add("main-nav__list--closed");
    siteListMenu.classList.remove("main-nav__list--open");
  }
});

var modalButton = document.querySelector(".knitted-baskets__order");
var modalForm = document.querySelector(".modal");
var modalOverlay =  document.querySelector(".modal__overlay");

modalForm.classList.remove("modal--nojs");
modalOverlay.classList.remove("modal__overlay--nojs");

  modalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.remove("modal--closed");
    modalOverlay.classList.remove("modal__overlay--closed");
    modalForm.classList.add("modal--open");
    modalOverlay.classList.add("modal__overlay--open");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalForm.classList.contains("modal--open")) {
        modalForm.classList.remove("modal--open");
        modalForm.classList.add("modal--closed");
        modalOverlay.classList.remove("modal__overlay--open");
        modalOverlay.classList.add("modal__overlay--closed");
      }
    }
  });
