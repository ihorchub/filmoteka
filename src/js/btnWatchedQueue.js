import { renderCards } from './renderCardsMyLibrary';

const watchedBtn = document.querySelector('.js-watched');
const queuedBtn = document.querySelector('.js-queue');
watchedBtn.addEventListener('click', onWatchedBtn);
queuedBtn.addEventListener('click', onQueuedBtn);

const WATCHED = 'movies-watched';
const QUEUE = 'movies-queue';

function onWatchedBtn() {
  const obj = JSON.parse(localStorage.getItem(WATCHED));
  renderCards(obj);
  watchedBtn.removeEventListener('click', onWatchedBtn);
}

function onQueuedBtn() {
  const obj = JSON.parse(localStorage.getItem(QUEUE));
  renderCards(obj);
  queuedBtn.removeEventListener('click', onQueuedBtn);
}
