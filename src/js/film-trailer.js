const axios = require('axios').default;
let modal = null;
const BASE_TRAILER_URL = 'https://www.youtube.com/embed/';
const trailerBody = document.querySelector('body');

async function showTrailer(id) {
  const trailer = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=411d08d89a4569fb1b50aec07ee6fb72`
  );

  if (trailer.data.results[0] && trailer.data.results[0].key)
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
