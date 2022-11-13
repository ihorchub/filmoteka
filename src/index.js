import ApiServise from './js/API';
import { switcher } from './js/switcher';
import { clickOnMovie } from './js/clickOnMovie';
import { onSubmit } from './js/onSubmit';
import { renderCards } from './js/renderCards';
import { stickyHeader } from './js/sticky-header';
import { refs } from './js/refs';
import { spiner, spinerRemove, noInfo } from './js/notifications';
import { onOpenTeamModal } from './js/team-modal.js';
import { ruAllert, ruDelete } from './js/notifications';
import {onCardClick} from './js/onCardClick'

export const apiServise = new ApiServise();

refs.searchForm.addEventListener('submit', onSubmit);
refs.stickyHeaderForm.addEventListener('submit', onSubmit);
refs.cardHolder.addEventListener('click', onCardClick);
refs.stickyHeaderForm.addEventListener('change', () => {
refs.searchForm.elements[0].value = refs.stickyHeaderForm.elements[0].value;});
refs.searchForm.addEventListener('change', () => {refs.stickyHeaderForm.elements[0].value = refs.searchForm.elements[0].value;});
spiner();
apiServise.fetchDefault().then(data => {renderCards(data)});
spinerRemove();
refs.footerLink.addEventListener('click', onOpenTeamModal);
