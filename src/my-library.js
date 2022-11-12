import ApiServiselibrary from './js/API';
//import { renderCardsLibrary } from './js/renderCards';
//import { showModalLibrary } from './js/film-modal';
import { onOpenTeamModal } from './js/team-modal.js';
import { switcher } from './js/switcher';
import { onQueuedBtn, onWatchedBtn } from './js/btnWatchedQueue.js';
import { spiner, spinerRemove, noInfo } from './js/notifications';
import trailer from './js/film-trailer.js';
import { showModal } from './js/film-modal';

export const refs = {
  cardHolderLibrary: document.querySelector('.card-holder'),
  footerLink: document.querySelector('.footer__link'),
  stickyHeaderMyLibrary: document.querySelector(
    '.js-my-library-header__sticky'
  ),
  watchedBtn: document.querySelector('.js-watched'),
  queuedBtn: document.querySelector('.js-queue'),
};

const stickyMyLibrary = (window.onscroll = function showHeaderMyLibrary() {
  if (window.pageYOffset > 200) {
    refs.stickyHeaderMyLibrary.classList.add('my-library-header__sticky');
  } else {
    refs.stickyHeaderMyLibrary.classList.remove('my-library-header__sticky');
  }
});

const apiServise = new ApiServiselibrary();

refs.footerLink.addEventListener('click', onOpenTeamModal);
refs.cardHolderLibrary.addEventListener('click', onCardClick);
refs.watchedBtn.addEventListener('click', onWatched);
refs.queuedBtn.addEventListener('click', onQueued);

// Початкове завантаження
onWatchedBtn();

function onWatched(e) {
  if (e.target.classList.contains('my-library-header__button--current')) return;

  e.target.classList.add('my-library-header__button--current');
  refs.queuedBtn.classList.remove('my-library-header__button--current');
  refs.cardHolderLibrary.innerHTML = '';
  onWatchedBtn();
}

function onQueued(e) {
  if (e.target.classList.contains('my-library-header__button--current')) return;

  e.target.classList.add('my-library-header__button--current');
  refs.watchedBtn.classList.remove('my-library-header__button--current');
  refs.cardHolderLibrary.innerHTML = '';
  onQueuedBtn();
}

function onCardClick(e) {
  if (e.target === e.currentTarget) return;

  if (e.target.classList.contains('film__trailer-btn'))
    return trailer.showTrailer(e.target.closest('li').id);

  apiServise.movieId = e.target.closest('li').id;
  spiner();
  apiServise.fetchById().then(data => {
    showModal(data.data);
    spinerRemove();
  });
}
