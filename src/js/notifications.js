// Варіант 1

import Notiflix from 'notiflix';
// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(totalMovies, query) {
  Notiflix.Notify.success(
    `Hooray we found ${totalMovies} movies for "${query}"`
  );
}

// Функція для крапок пагінації
export function successPages(total, query = '') {
  Notiflix.Notify.success(
    query
      ? `Hooray we found ${total} pages for ${query}`
      : `Hooray we found ${total} popular pages`
  );
}

export function failure() {
  Notiflix.Notify.failure('Sorry, no matches found for your search query!');
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
    `You are trying to search "${query}" again, please enter a different search query`
  );
}

export function warning() {
  Notiflix.Notify.warning('Enter your search query in the search bar');
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
  Notiflix.Notify.warning('Info about this movie not found');
}

export function noTrailer() {
  Notiflix.Notify.warning('Trailer not found');
}

// Додати 4 функціїї додано і видалено до черги та переглянутих

export function addToWatchQueue() {
  Notiflix.Notify.info('The movie has been added to the watch queue.');
}

export function removeFromQueue() {
  Notiflix.Notify.info('The movie has been removed from the viewing queue.');
}

export function addToWatched() {
  Notiflix.Notify.info('Movie added to watched.');
}

export function removeFromWatched() {
  Notiflix.Notify.info('The movie has been removed from viewed.');
}
