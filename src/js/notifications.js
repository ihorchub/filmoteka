// Варіант 1

import Notiflix from 'notiflix';
// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(title) {
  Notiflix.Notify.success(`${title} movies found`);
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

export function warning() {
  Notiflix.Notify.warning('Please, enter your desire here');
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
