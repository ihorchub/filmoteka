import { refs } from '../index';
export function renderCards(data) {
  const markup = data.data.results
    .map(({ id, poster_path, name, title, release_date, genre_ids }) => {
      return `<li class="film__item" id="${id}"><a class="film__item__link">
                  ${getMarkupImgPoster(poster_path, name, title)}
                  <h2>${getShortName(title || name)}</h2>
                  <p> ${getGenresByID(genre_ids)} | ${getYear(release_date)}</p>
                  <button class="film__trailer-btn" type="button">Trailer <span class="film__trailer-btn">&#9654;</span></button>
                </a>
              </li>`;
    })
    .join('');
  refs.cardHolder.insertAdjacentHTML('beforeend', markup);
}

const genreIdName = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

function getGenresByID(genreIds) {
  const newArr = [];
  genreIdName.map(genre => {
    for (const id of genreIds) {
      if (genre.id === id) {
        newArr.push(genre.name);
      }
    }
  });
  if (newArr.length >= 2) {
    const slisedArr = newArr.slice(0, 2);
    slisedArr[2] = 'Other';
    return slisedArr;
  } else {
    return 'Other';
  }
}

function getShortName(string) {
  if (string) {
    if (string.length >= 32) {
      return string.substr(0, 25) + '...';
    }
    return string;
  }
}

function getYear(date) {
  return date ? date.split('-')[0] : '2022';
}

function getPosterPath(path) {
  return `https://www.themoviedb.org/t/p/w500${path}`;
  // return path
  //   ? `https://www.themoviedb.org/t/p/w500${path}`
  //   : 'https://www.mysafetysign.com/img/lg/S/post-no-bills-sign-st-0124.png';
}

function getMarkupImgPoster(poster_path, name, title) {
  return poster_path
    ? `<img src=" ${getPosterPath(poster_path)}" alt="${
        name || title
      }" loading="lazy" />`
    : ``;
  // : `<picture  loading="lazy">
  //       <source
  //         media="(min-width: 1280px)"
  //         srcset="
  //           ../images/card/default-poster-desktop.jpg    1x,
  //           ../images/card/default-poster-desktop-2x.jpg 2x
  //         "
  //       />
  //       <source
  //         media="(min-width: 768px)"
  //         srcset="
  //           ../images/card/default-poster-tablet.jpg    1x,
  //           ../images/card/default-poster-tablet-2x.jpg 2x
  //         "
  //       />
  //       <source
  //         media="(min-width: 320px)"
  //         srcset="
  //           ../images/card/default-poster-mobile.jpg    1x,
  //           ../images/card/default-poster-mobile-2x.jpg 2x
  //         "
  //       />
  //       <img
  //         src="../images/card/default-poster-desktop.jpg"
  //         alt="${name || title}"
  //         loading="lazy"
  //       />
  //     </picture>`;
}
