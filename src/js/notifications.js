import { refs } from '../index';
import { onSubmitScroll } from './onSubmit';
import Notiflix from 'notiflix';
import {pagination} from "./pagination"

// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(totalMovies, query) {
  Notiflix.Notify.success(
    `Hooray we found ${totalMovies} movies for "${query}"`,
    {
    timeout: 4000,
    }
  );
}

// Функція для крапок пагінації
export function successPages() {
  Notiflix.Notify.success(`Hooray, you clicked on the there dots!`);
}

// export function successPagesLib(total) {
//   Notiflix.Notify.success(`You have ${total} pages`, {
//     timeout: 4000,
//   });
// }

// Функції пошуку фільму
export function failure() {
  Notiflix.Notify.failure('Sorry, no matches found for your search query!',
    {
    timeout: 4000,
  }
  );
}
// export function missingTrailer() {
//   Notiflix.Report.info(
//     'Missing Trailer!',
//     'Unfortunately the trailer was lost in the vastness of the space',
//     'Thanks'
//   );
// }

export function secondRequest(query) {
  Notiflix.Notify.warning(
    `You are trying to search "${query}" again, please enter a different search query`,
    {
      timeout: 4000,
    }
  );
}

export function warning() {
  Notiflix.Notify.warning('Enter your search query in the search bar',
    {
    timeout: 4000,
    }
  );
}
// Функція запуску спінера
export function spiner() {
  Notiflix.Loading.circle(
    {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  );
}
// Функція припинення спінера
export function spinerRemove() {
  Notiflix.Loading.remove();
}
// Функція "інфи про фільм не знайдено"
export function noInfo() {
  Notiflix.Notify.failure('Info about this movie not found');
}
// Функція "трейлер не знайдено"
export function noTrailer() {
  Notiflix.Notify.failure('Trailer not found');
}

// Функція "додано фільм вчергу"
export function addToWatchQueue() {
  Notiflix.Notify.info('The movie has been added to the queue');
}
// Функція "видалено фільм з черги"
export function removeFromQueue() {
  Notiflix.Notify.info('The movie has been removed from the queue');
}

export function infoRemoveFromQueue() {
Notiflix.Report.info('Removing the movie',
'You delete a movie from the queue',
'Okay',
  );
}

// Функція "додано фільм до перглянутих"
export function addToWatched() {
  Notiflix.Notify.info('The movie has been added to watched');
}
// Функція "видалено фільм з переглянутих"
export function removeFromWatched() {
  Notiflix.Notify.info('The movie has been removed from watched');
}
export function infoRemoveFromWatched() {
Notiflix.Report.info('Removing the movie',
'You delete a movie from the watched',
'Okay',
  );
}

// Оповіщення про заборону перегляду в Україні
export function ruAllert() {
  Notiflix.Notify.failure('This film is banned for showing in Ukraine'),
    {
      timeout: 4000,
    };
}

let timerId = null

// Оповіщення про видалення і блокування контенту
export function ruDelete() {
  Notiflix.Report.failure(
    'ТА ТИ, СІ КУРВА, ВСПОКОЇШ ЧИ НЄ?!!',
    'Вы не поняли спервого раза что данный контент заблокирован, значит вы - тупая РУСНЯ! Согласно закону Украины о русне вы получаете санкцию в виде страдания.Пожалуйста, для получения санкции подтвердите удаление всей информации с вашего девайса, иначе по истичению 15 минут запустится функция его самоуничтожения.Время пошло. (Ваш IP адрес, геолокация и персональные данные уже переданы СБУ.Даное действие вы можете оспорить в суде согласно Закону Украины) СЛАВА УКРАЇНІ!',
    'Удалить всю информацию',
    ruRepeatMessage,
    {
    titleFontSize: '20px',
    messageFontSize: '16px',
    messageMaxLength: 600,
    messageFontSize: '16px',
    buttonFontSize:'18px',    

    });
  refs.ruBackdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
  setTimeout(() => {
    pagination.style.display = "none"
    refs.cardHolder.innerHTML = "";
    refs.ruCorablBanner.style.display = "block"
    clearInterval(timerId)
  }, 15000);
}

function ruRepeatMessage() {
  Notiflix.Notify.failure('Удаляю весь контент', {
    position: getRandomPositionElement(positions),
    cssAnimationStyle: getRandomAnimationElement(animations),
    timeout: 700,
  });
   onSubmitScroll();
 timerId = setTimeout(ruRepeatMessage, 700);
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
