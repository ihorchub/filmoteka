import ApiServise from "./js/API";
import { onSubmit } from "./js/onSubmit";
import { renderCards } from "./js/renderCards";

export const refs = {
    searchForm: document.querySelector('.home-header__form'),
    cardHolder: document.querySelector('.card-holder')
}

const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit)

apiServise.fetchDefault().then(
    data => {
        renderCards(data);
    }
  // marcap
);

