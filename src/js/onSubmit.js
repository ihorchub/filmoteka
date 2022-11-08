import ApiServise from "./API";
import { renderCards } from "./renderCards";
import { refs } from "../index";
import { warning, success, secondRequest, failure } from "./notifications";


const apiServise = new ApiServise();

let value = null;


export function onSubmit(e) {
  e.preventDefault();
  if (value === e.target.elements[0].value.trim()) {
      secondRequest(e.target.elements[0].value.trim());
      return;
    }

  if (e.target.elements[0].value.trim() === '') {
      warning();
      return;
  }
  apiServise.query = e.target.elements[0].value.trim();
  apiServise.resetPage();
  apiServise.fetch().then((data) => {
    if (data.data.results.length === 0) {
failure()
      return;
    }
    else {
      success(data.data.total_results, e.target.elements[0].value.trim());
      refs.cardHolder.innerHTML = '';
      renderCards(data);
      onSubmitScroll();
    }
  })
  value = e.target.elements[0].value.trim();
}



function onSubmitScroll() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}