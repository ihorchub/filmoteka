import ApiServise from "./API";
import { refs } from "..";
import { renderCards } from "./renderCards";

const apiServise = new ApiServise();

export function onScroll() {
   
  const position = document.documentElement.getBoundingClientRect();
  const userPort = document.documentElement.clientHeight + 2000;
    if (position.bottom < userPort) {
        
    apiServise.query = refs.searchForm.elements[0].value.trim();
    apiServise.fetch().then(data => { renderCards(data); });
  }
};