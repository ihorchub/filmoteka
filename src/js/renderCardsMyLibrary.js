import { refs } from '../my-library';
import {getMarkupImgPoster,getShortName,getGenresByID,getYear} from './renderCards'

export function renderCards(obj) {
  refs.cardHolderLibrary.innerHTML = obj.map(({id,
          poster_path,
          name,
          title,
          release_date,
          genres,
          original_language,})=> {
      return `<li class="film__item" id="${id}"><a class="film__item__link">
                ${getMarkupImgPoster(original_language,poster_path, name, title)}
                <h2>${getShortName(title || name)}</h2>
                <p> ${getGenresByID(genres)} | ${getYear(release_date)}</p>
                <button class="film__trailer-btn" type="button">Trailer <span class="film__trailer-btn">&#9654;</span></button>
              </a>
            </li>`;
    })
    .join('');
};