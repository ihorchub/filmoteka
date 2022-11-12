import { renderCards } from './renderCardsMyLibrary';
import { spiner, spinerRemove, noInfo } from '../js/notifications';

// const watchedBtn = document.querySelector('.js-watched');
// const queuedBtn = document.querySelector('.js-queue');
// watchedBtn.addEventListener('click', onWatchedBtn);
// queuedBtn.addEventListener('click', onQueuedBtn);

const WATCHED = 'movies-watched';
const QUEUE = 'movies-queue';
// Заглушки порожньої сторінки
const img = document.querySelector('.empty__page');
const text = document.querySelector('.empty__page-text');

export function onWatchedBtn() {
  img.classList.add('is-hidden');
  text.classList.add('is-hidden');

  spiner();
  const obj = JSON.parse(localStorage.getItem(WATCHED));
  if (obj?.length) {
    renderCards(obj);
    spinerRemove();
  } else {
    img.classList.remove('is-hidden');
    text.classList.remove('is-hidden');
    spinerRemove();
  }
  // watchedBtn.removeEventListener('click', onWatchedBtn);
}

export function onQueuedBtn() {
  img.classList.add('is-hidden');
  text.classList.add('is-hidden');

  spiner();
  const obj = JSON.parse(localStorage.getItem(QUEUE));
  if (obj?.length) {
    renderCards(obj);
    spinerRemove();
  } else {
    img.classList.remove('is-hidden');
    text.classList.remove('is-hidden');
    spinerRemove();
  }
  // queuedBtn.removeEventListener('click', onQueuedBtn);
}
