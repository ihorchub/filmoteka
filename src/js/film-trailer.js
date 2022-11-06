const axios = require('axios').default;
let modal = null;
const BASE_TRAILER_URL = 'https://www.youtube.com/embed/';
const TRAILER_API_KEY = '411d08d89a4569fb1b50aec07ee6fb72';
const trailerBody = document.querySelector('body');

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
  if (link)
    trailerBody.insertAdjacentHTML(
      'beforeend',
      `<div class="trailer__wrap">
    <div class="container">
      <iframe
        class="trailer__player"
        src="${BASE_TRAILER_URL}${link}"
        width="100%"
        height="100%"
      >
        ></iframe
      >
    </div>
  </div>`
    );
  else
    trailerBody.insertAdjacentHTML(
      'beforeend',
      `<div class="trailer__wrap">
    <div class="container">
      Trailer not found
    </div>
  </div>`
    );

  trailerBody.style = `height: 100%; overflow-y: hidden`;
  modal = document.querySelector('.trailer__wrap');
  modal.addEventListener('click', closeTrailer);
}

function closeTrailer(e) {
  if (
    e.target.classList.contains('trailer__wrap') ||
    e.target.classList.contains('container')
  ) {
    modal.remove();
    trailerBody.style = ``;
    modal.removeEventListener('click', closeTrailer);
  }
}

export default { showTrailer };
