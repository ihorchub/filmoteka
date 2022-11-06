import ApiServise from './js/API';
import { onSubmit } from './js/onSubmit';
import { renderCards } from './js/renderCards';
// import { clickOnMovie } from './js/clickOnMovie';
import trailer from './js/film-trailer.js';

export const refs = {
  searchForm: document.querySelector('.home-header__form'),
  cardHolder: document.querySelector('.card-holder'),
  conteiner: document.querySelector('.card-container.container'),
};

const apiServise = new ApiServise();

refs.searchForm.addEventListener('submit', onSubmit);
refs.cardHolder.addEventListener('click', onCardClick);
// refs.conteiner.addEventListener('click', clickOnMovie);

apiServise.fetchDefault().then(data => {
  renderCards(data);
});

function onCardClick(e) {
  if (e.target === e.currentTarget) return;

  if (e.target.classList.contains('film__trailer-btn'))
    return trailer.showTrailer(e.target.closest('li').id);
}
