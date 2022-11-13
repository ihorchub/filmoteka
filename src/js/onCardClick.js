import ApiServise from "./API";
import { spiner, spinerRemove, noInfo } from './notifications';
import { showModal } from './film-modal';
import trailer from './film-trailer.js';

const apiServise=new ApiServise()

export function onCardClick(e) {
  if (e.target === e.currentTarget) return;

  if (e.target.classList.contains('film__trailer-btn'))
    return trailer.showTrailer(e.target.closest('li').id);

  // apiServise.movieId = e.path[2].id без постера не відкривається модалка
  apiServise.movieId = e.target.closest('li').id;
  spiner();
  apiServise.fetchById().then(data => {
    if (!data) {
      noInfo();
      spinerRemove();
      return;
    }
    if (data.data.original_language === 'ru') {
      ruAllert();
      e.target.classList.add('ruContent');
      spinerRemove();
    } else {
      showModal(data.data);
      spinerRemove();
    }
  });

  if (e.target.classList.contains('ruContent')) {
    ruDelete();
  }
}