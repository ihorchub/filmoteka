import { noTrailer } from './notifications';
const axios = require('axios').default;
const BASE_TRAILER_URL = 'https://www.youtube.com/embed/';
const TRAILER_API_KEY = '411d08d89a4569fb1b50aec07ee6fb72';
const trailerBody = document.querySelector('body');
const trailerBackdrop = document.querySelector('.js-movie-modal-mask');

async function showTrailer(id) {
  let trailer = null;

  try {
    trailer = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TRAILER_API_KEY}`
    );
  } catch (error) {
    return renderPlayer();
  }

  const officialTrailer = trailer.data.results.filter(
    item => item.name.includes('Trailer') || item.name.includes('trailer')
  );

  if (officialTrailer.length && officialTrailer[0].key)
    return renderPlayer(officialTrailer[0].key);

  if (trailer.data.results.length && trailer.data.results[0].key)
    return renderPlayer(trailer.data.results[0].key);

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

    trailerBackdrop.classList.remove('is-hidden');
    trailerBody.style = `height: 100%; overflow-y: hidden`;
    trailerBackdrop.addEventListener('click', closeTrailer);
  }
  else {
    noTrailer();
  }

  // else
   // trailerBackdrop.innerHTML = `<div class="container trailer__container">
    //  <div class="trailer__info">Trailer not found</div>
    // </div>`;

  // trailerBackdrop.classList.remove('is-hidden');

  //Scroll off
  // trailerBody.onscroll = () => {
    // window.scroll(0, 0);
  // };

  // trailerBackdrop.addEventListener('click', closeTrailer);

}

function closeTrailer(e) {
  if (
    e.target.classList.contains('trailer__wrap') ||
    e.target.classList.contains('container')
  ) {
    trailerBackdrop.classList.add('is-hidden');
    trailerBackdrop.innerHTML = '';

    //Scroll on
    trailerBody.onscroll = () => {};

    trailerBackdrop.removeEventListener('click', closeTrailer);
  }
}

export default { showTrailer };
