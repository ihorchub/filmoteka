import ApiServise from "./API";
import { renderCards } from "./renderCards";
import { refs } from "../index";

const apiServise = new ApiServise();

export function onSubmit(e) {
  e.preventDefault();
  refs.cardHolder.innerHTML = '';
    apiServise.query = e.target.elements[0].value.trim();
  apiServise.fetch().then((data) => {
      renderCards(data)
    })
}