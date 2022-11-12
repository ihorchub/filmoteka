import { renderCards } from './renderCardsMyLibrary';
import { spiner, spinerRemove, noInfo } from '../js/notifications';

// const watchedBtn = document.querySelector('.js-watched');
// const queuedBtn = document.querySelector('.js-queue');
// watchedBtn.addEventListener('click', onWatchedBtn);
// queuedBtn.addEventListener('click', onQueuedBtn);

const WATCHED = 'movies-watched';
const QUEUE = 'movies-queue';

export function onWatchedBtn() {
  const obj = JSON.parse(localStorage.getItem(WATCHED));
  if (obj?.length) {
    spiner();
    renderCards(obj);
    spinerRemove();
  }
  // watchedBtn.removeEventListener('click', onWatchedBtn);
}

export function onQueuedBtn() {
  const obj = JSON.parse(localStorage.getItem(QUEUE));
  if (obj?.length) {
    spiner();
    renderCards(obj);
    spinerRemove();
  }
  // queuedBtn.removeEventListener('click', onQueuedBtn);
}
