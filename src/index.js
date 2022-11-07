import ApiServise from "./js/API";
import throttle from "lodash.throttle";
import { onSubmit } from "./js/onSubmit";
import { renderCards } from "./js/renderCards";
import { clickOnMovie } from "./js/clickOnMovie";
import { onScroll } from "./js/onScroll";


export const refs = {
    searchForm: document.querySelector('.home-header__form'),
    cardHolder: document.querySelector('.card-holder'),
    conteiner: document.querySelector('.card-container.container')
}

const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit);
refs.conteiner.addEventListener('click', clickOnMovie);
window.addEventListener('scroll', throttle(onScroll, 1000));

apiServise.fetchDefault().then(data => { renderCards(data); });

