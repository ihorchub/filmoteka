import  ApiServise  from "./js/API";
import { onSubmit } from "./js/onSubmit";
import { renderCards } from "./js/renderCards";
import { clickOnMovie } from "./js/clickOnMovie";

export const refs = {
    searchForm: document.querySelector('.home-header__form'),
    cardHolder: document.querySelector('.card-holder'),
    conteiner: document.querySelector('.card-container.container')
}

const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit);
refs.conteiner.addEventListener('click',clickOnMovie)

apiServise.fetchDefault().then(data => { renderCards(data);});
