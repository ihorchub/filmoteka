const filmModal = document.querySelector('.js-movie-modal');
const filmModalMask = document.querySelector('.js-movie-modal-mask');

filmModalMask.addEventListener('click', closeModal);

export function showModal (data) {
    renderModal(data);
    const closeBtn = document.querySelector('.js-movie-modal__close-btn');
    closeBtn.addEventListener('click', closeModal);
    filmModal.classList.remove('is-hidden');
    filmModalMask.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);
}

function closeModal (e) {
    e.preventDefault();
    filmModal.classList.add('is-hidden');
    filmModalMask.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
        closeModal(e);
    }
}

function getPosterPath(path) {
    return path ? `https://www.themoviedb.org/t/p/w500${path}`: 'https://www.mysafetysign.com/img/lg/S/post-no-bills-sign-st-0124.png';
}

function renderModal(data) {
    filmModal.innerHTML = `
    <div class="js-movie-modal__content">
        <button class = "js-movie-modal__close-btn">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
            <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
        </svg>              
        </button>
        <div class="js-movie-modal__poster">
            <img class = "js-movie-modal__img" src="${getPosterPath(data.poster_path)}" alt="movie-poster">
        </div>
        <div class="movie-modal__info-about">
            <h1 class="js-movie-modal__title">${data.title}</h1>
    <div class="movie-modal__info">
        <div class="movie-modal__info-name">
            <p class="info-name">Vote / Votes</p>
            <p class="info-name">Popularity</p>
            <p class="info-name">Original Title</p>
            <p class="info-name">Genre</p>
        </div>
        <div class="movie-modal__info-value">
            <p class="js-info-value">
                <span class="js-info-value__vote">${data.vote_average.toFixed(1)}</span>&ensp;/&ensp; 
                <span class="js-info-value__votes">${data.vote_count}</span>
            </p>
            <p class="js-info-value">${data.popularity}</p>
            <p class="js-info-value">${data.original_title}</p>
            <p class="js-info-value">${data.genres.map(genre => genre.name).join(', ')}</p>
        </div>
    </div>
    <h2 class="movie-modal__about">About </h2>
    <p class="js-movie-modal__about-text">${data.overview}</p>
    <ul class = "movie-modal__btn-list">
        <li class = "movie-modal__btn-list-item">
            <button class="js-movie-modal__btn" type = "button">add to Watched</button>
        </li>
        <li class = "movie-modal__btn-list-item">
            <button class="js-movie-modal__btn" type = "button">add to queue</button>
        </li>
    </ul>
        </div>
    </div>`;
}
