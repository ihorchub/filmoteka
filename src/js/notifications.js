// Варіант 1
import { refs } from '../index';

import Notiflix from 'notiflix';
// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(totalMovies, query) {
  Notiflix.Notify.success(
    `Hooray we found ${totalMovies} movies for "${query}"`, {
      timeout: 4000,
    }
  );
}

// Функція для крапок пагінації
export function successPages(total, query = '') {
  Notiflix.Notify.success(
    query
      ? `Hooray we found ${total} pages for ${query}`
      : `Hooray we found ${total} popular pages`, {
        timeout: 4000,
      }
  );
}

export function failure() {
  Notiflix.Notify.failure('Sorry, no matches found for your search query!', {
    timeout: 4000,
  });
}
export function missingTrailer() {
  Notiflix.Report.info(
    'Missing Trailer!',
    'Unfortunately the trailer was lost in the vastness of the space',
    'Thanks'
  );
}

export function secondRequest(query) {
  Notiflix.Notify.warning(
    `You are trying to search "${query}" again, please enter a different search query`, {
      timeout: 4000,
    }  
  );
}

export function warning() {
  Notiflix.Notify.warning('Enter your search query in the search bar', {
    timeout: 4000,
  }
  );
}

export function spiner() {
  Notiflix.Loading.circle({
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  });
}

export function spinerRemove() {
  Notiflix.Loading.remove();
}

export function noInfo() {
  Notiflix.Notify.failure('Info about this movie not found');
}

export function noTrailer() {
  Notiflix.Notify.failure('Trailer not found');
}

// Додати 4 функціїї додано і видалено до черги та переглянутих

export function addToWatchQueue() {
  Notiflix.Notify.info('The movie has been added to the queue');
}

export function removeFromQueue() {
  Notiflix.Notify.warning('The movie has been removed from the queue');
}

export function addToWatched() {
  Notiflix.Notify.info('The movie has been added to watched');
}

export function removeFromWatched() {
  Notiflix.Notify.warning('The movie has been removed from watched');
}

export function ruAllert() {
  Notiflix.Notify.failure('This film is banned for showing in Ukraine'), {
    timeout:4000
  }
}

export function ruDelete() {
  Notiflix.Report.failure(
    'РУСНЯВЫЙ КОНТЕНТ!',
    'Пожалуйста, подтвердите удаление всей информации с вашего девайса, иначе я запускаю функцию его самоуничтожения',
    'Удалить всю информацию',
  ruRepeatMessage
  );
  refs.ruBackdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = "hidden"
}

function ruRepeatMessage() {
  Notiflix.Notify.failure('Удаляю весь контент', {
    position: getRandomPositionElement(positions),
    cssAnimationStyle: getRandomAnimationElement(animations),
    timeout: 700
  });
  setTimeout(ruRepeatMessage, 700);
  
}

const positions = [
  'right-top',
  'right-bottom',
  'left-top',
  'left-bottom',
  'center-top',
  'center-bottom',
  'center-center',
];


const animations = [
  'fade',
  'zoom',
  'from-right',
  'from-top',
  'from-bottom',
  'from-left',
];

function getRandomPositionElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function getRandomAnimationElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
