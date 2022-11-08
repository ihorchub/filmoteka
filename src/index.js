import ApiServise from "./js/API";
import throttle from "lodash.throttle";
import { clickOnMovie } from "./js/clickOnMovie";
import { onScroll } from "./js/onScroll";
import { onSubmit } from "./js/onSubmit";
import { renderCards } from "./js/renderCards";
import { stickyHeader } from "./js/sticky-header";
import trailer from './js/film-trailer.js';
import { showModal } from './js/film-modal';


export const refs = {
  searchForm: document.querySelector('.home-header__form'),
  cardHolder: document.querySelector('.card-holder'),
  // conteiner: document.querySelector('.card-container.container'),
  stickyHeader: document.querySelector('.js-home-header__sticky'),
  stickyHeaderForm: document.querySelector('.home-header__form__sticky'),
};

const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit);
// window.addEventListener('scroll', throttle(onScroll, 1000));
refs.stickyHeaderForm.addEventListener("submit", onSubmit);
refs.cardHolder.addEventListener('click', onCardClick);

// refs.conteiner.addEventListener('click', clickOnMovie);


apiServise.fetchDefault().then(data => {renderCards(data);});

function onCardClick(e) {
  if (e.target === e.currentTarget) return;

  if (e.target.classList.contains('film__trailer-btn'))
    return trailer.showTrailer(e.target.closest('li').id);

  // apiServise.movieId = e.path[2].id без постера не відкривається модалка
  apiServise.movieId = e.target.closest('li').id;
  apiServise.fetchById().then(data => {showModal(data.data);});

  // apiServise.movieId = e.path[2].id
    
  // apiServise.fetchById(e.path[2].id).then(console.log);
}
