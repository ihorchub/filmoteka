// import ApiServise from './API';
import { apiServise } from '../index.js';
import { renderCards } from './renderCards';
import {
  warning,
  success,
  secondRequest,
  failure,
  spiner,
  spinerRemove,
} from './notifications';

// const apiServise = new ApiServise();

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
  spiner();
  apiServise.fetch().then(data => {
    if (data.data.results.length === 0) {
      failure();
      spinerRemove();
      return;
    } else {
      success(data.data.total_results, e.target.elements[0].value.trim());
      renderCards(data);
      spinerRemove();
    }
  });
  value = e.target.elements[0].value.trim();
}

export function onSubmitScroll() {

// export function onSubmitScroll() {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
