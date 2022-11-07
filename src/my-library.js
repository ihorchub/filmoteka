//import ApiServiselibrary from './js/API';
//import { renderCardsLibrary } from './js/renderCards';
//import { showModalLibrary } from './js/film-modal';

export const refs = {
  cardHolderLibrary: document.querySelector('.card-holder'),

  stickyHeaderMyLibrary: document.querySelector(
    '.js-my-library-header__sticky'
  ),
};

const stickyMyLibrary = (window.onscroll = function showHeaderMyLibrary() {
  if (window.pageYOffset > 200) {
    refs.stickyHeaderMyLibrary.classList.add('my-library-header__sticky');
  } else {
    refs.stickyHeaderMyLibrary.classList.remove('my-library-header__sticky');
  }
});

//const apiServise = new ApiServiselibrary();
