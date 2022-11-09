// Варіант 1

import Notiflix from 'notiflix';
// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(totalMovies, query) {
  Notiflix.Notify.success(
    `Hooray we found ${totalMovies} movies for "${query}"`
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
  Notiflix.Notify.warning(`You are trying to search "${query}" again, please enter a different search query`);
}

export function warning() {
  Notiflix.Notify.warning('Enter your search query in the search bar');
}

export function spiner() {
  Notiflix.Loading.circle();
}

export function spinerRemove() {
  Notiflix.Loading.remove();
}

export function noInfo() {
  Notiflix.Loading.custom({
    customSvgCode:
      '<div style="margin-bottom:150px;"></div><h2 style="text-transform:uppercase; color:red">Info about this movie not found</h2>',
    svgSize: '500px',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  });
  Notiflix.Loading.remove(1000)
}

export function noTrailer() {
  Notiflix.Loading.custom({
    customSvgCode:
      '<div style="margin-bottom:150px;"></div><h2 style="text-transform:uppercase; color:red">Trailer not found</h2>',
    svgSize: '500px',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  });
  Notiflix.Loading.remove(1000);
}
  


// Варіант 2

// import { Notify } from 'notiflix';
// import { Loading } from 'notiflix';
// function onSearch(e) {
//   e.preventDefault();
//   Notify.success(`За вашим запитом ми знайшли ${total_results} зображень`);
//   Notify.info('Фільм додано до черги перегляду');
//   Notify.info('Фільм додано до переглянутих');
// }
// function onError(err) {
//   Notify.failure('За вашим запитом фільмів не знайдено');
// }
// // function () {
// //     Loading.dots(
// //         'Зачекайте, будь ласка'
// //     );
// // }
