import { noTrailer, spiner, spinerRemove } from './notifications.js';
import ApiServise from '../js/API.js';
import { showBackdrop, closeBackdrop } from './backdrop.js';
// import { showModal } from './film-modal.js';

const api = new ApiServise();
// const axios = require('axios').default;
const BASE_TRAILER_URL = 'https://www.youtube.com/embed/';
// const TRAILER_API_KEY = '411d08d89a4569fb1b50aec07ee6fb72';
// const trailerBody = document.querySelector('body');
const trailerBackdrop = document.querySelector('.js-movie-modal-mask');

async function showTrailer(id) {
  let trailer = null;

  // Отримання даних
  try {
    spiner();
    api.movieId = id;
    trailer = await api.fetchOnMovie();
  } catch (error) {
    return renderPlayer();
  } finally {
    spinerRemove();
  }

  // Фільтрація по ключовому слову
  let officialTrailer = [];
  if (trailer?.data?.results?.length)
    officialTrailer = trailer.data.results.filter(item =>
      item.name.toLowerCase().includes('trailer')
    );

  // Рендер трейлера в залежності чи знайдено саме відео трейлера
  if (officialTrailer.length && officialTrailer[0].key)
    return renderPlayer(officialTrailer[0].key);

  // Рендер будь якого знайденого відео
  if (trailer?.data?.results?.[0]?.key)
    return renderPlayer(trailer.data.results[0].key);

  // Перевірки не дали результату, рендериться помилка
  renderPlayer();
}

function renderPlayer(link = '') {
  if (link) {
    trailerBackdrop.innerHTML = `<div class="container trailer__container">
      <iframe
        class="trailer__player"
        src="${BASE_TRAILER_URL}${link}"
        width="100%"
        height="100%"
      >
        ></iframe
      >
    </div>`;

    showBackdrop();
    trailerBackdrop.addEventListener('click', closeTrailer);
    window.addEventListener('keydown', closeTrailer);
  } else {
    noTrailer();
  }
}

function closeTrailer(e) {
  if (
    e.target.classList.contains('js-movie-modal-mask') ||
    e.target.classList.contains('container') ||
    e.code === 'Escape'
  ) {
    closeBackdrop();
    trailerBackdrop.removeEventListener('click', closeTrailer);
  }
}

export default { showTrailer };
