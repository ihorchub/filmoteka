import ApiServise from "./js/API";
import { onSubmit } from "./js/onSubmit";
import { renderCards } from "./js/renderCards";
import { stickyHeader } from "./js/sticky-header";

export const refs = {
  searchForm: document.querySelector('.home-header__form'),
  cardHolder: document.querySelector('.card-holder'),
  stickyHeader: document.querySelector('.js-home-header__sticky'),
  stickyHeaderForm: document.querySelector('.home-header__form__sticky'),
};



const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit);
refs.stickyHeaderForm.addEventListener("submit", onSubmit);


apiServise.fetchDefault().then(
    data => {
        renderCards(data);
    }
  // marcap
);

