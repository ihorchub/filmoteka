import ApiServise from "./API";
import { renderCards } from "./renderCards";
import { refs } from "../index";

const apiServise = new ApiServise();

export function onSubmit(e) {
  e.preventDefault();
  if (e.target.elements[0].value === '') {
    return
  }
  onSubmitScroll();
    apiServise.query = e.target.elements[0].value.trim();
  apiServise.fetch().then((data) => {
     refs.cardHolder.innerHTML = '';
      renderCards(data)
  })
  e.target.reset();
}

function onSubmitScroll() {
 window.scroll({
    top: 0,
    left: 0,
  behavior: 'smooth',
  });
}