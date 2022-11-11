import { apiServise } from '../index.js';
import { renderCards } from './renderCards';
import { spiner, spinerRemove, successPages } from './notifications.js';

// const apiServise = new ApiServise();
const pagination = document.querySelector('.pagination__container');
pagination.addEventListener('click', clickPaginetion);
let firstPage = null;
let endPage = null;

export function getPagination(currentPage, lastPage) {
  if (!currentPage || lastPage === 1 || lastPage - currentPage < 0) {
    pagination.style = `margin; 0`;
    pagination.innerHTML = '';
    return;
  }
  firstPage = currentPage;
  endPage = lastPage;

  let pages = getPagesArray(currentPage, lastPage);

  pagination.innerHTML = `<button class="pagination__left-btn on" type="button">
    <svg width="16" height="16">
      <use href="./images/pagination/icons.svg#icon-arrow-right"></use>
    </svg>
  </button>
  <ul class="pagination__list"></ul>
  <button class="pagination__right-btn on" type="button">
    <svg width="16" height="16">
      <use href="./images/pagination/icons.svg#icon-arrow-right"></use>
    </svg>
  </button>`;

  if (window.screen.width <= 768) pagination.style = `margin-bottom: 40px`;
  else pagination.style = `margin-bottom: 60px`;

  if (currentPage === 1) {
    document.querySelector('.pagination__left-btn').classList.remove('on');
    document.querySelector('.pagination__left-btn').disabled = true;
  } else if (lastPage === currentPage) {
    document.querySelector('.pagination__right-btn').disabled = true;
    document.querySelector('.pagination__right-btn').classList.remove('on');
  }

  const list = document.querySelector('.pagination__list');

  list.insertAdjacentHTML('beforeend', renderLi(pages));

  const itemList = list.children;

  for (let i = 0; i < itemList.length; i++) {
    // if (!isNaN(Number(itemList[i].id)))
    //   itemList[i].classList.add('pagination__on');
    if (Number(itemList[i].id) === currentPage)
      itemList[i].classList.add('pagination__item--current');
  }
}

function renderLi(arr) {
  return arr.reduce(
    (acc, item) =>
      acc +
      `<li class="pagination__item pagination__on" id='${item}'>${item}</li>`,
    ''
  );
}

function getPagesArray(currentPage, lastPage) {
  let result = [];

  if (window.screen.width <= 768) {
    if (lastPage <= 5) {
      result = ['', ''];
      for (let m = 0; m < lastPage; m++) result.push(m + 1);
      result.push('');
      result.push('');
    } else if (currentPage >= 3 && lastPage - currentPage >= 2) {
      result = [
        '',
        '',
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        '',
        '',
      ];
    } else if (currentPage <= 2) {
      result = ['', ''];
      for (let m = 0; m < 5; m++) result.push(m + 1);
      result.push('');
      result.push('');
    } else {
      result = ['', ''];
      for (let m = 4; m > 0; m--) result.push(lastPage - m);
      result.push(lastPage);
      result.push('');
      result.push('');
    }

    return result;
  }

  if (lastPage <= 9) for (let i = 0; i < lastPage; i++) result.push(i + 1);
  else if (lastPage - currentPage >= 5 && currentPage >= 6)
    result = [
      1,
      '...',
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      '...',
      lastPage,
    ];
  else if (lastPage - currentPage >= 5 && currentPage <= 5) {
    for (let j = 0; j < 7; j++) result.push(j + 1);

    result.push('...');
    result.push(lastPage);
  } else {
    result.push(1);
    result.push('...');
    for (let i = 6; i > 0; i--) result.push(lastPage - i);
    result.push(lastPage);
  }
  return result;
}

function clickPaginetion(e) {
  console.log(e.target.nodeName);
  //відстежування натискань
  if (e.target === e.currentTarget || e.target.nodeName === 'UL') return;

  let id = null;
  if (
    e.target.nodeName === 'svg' ||
    e.target.nodeName === 'BUTTON' ||
    e.target.nodeName === 'use'
  ) {
    if (
      e.target.closest('button').classList.contains('pagination__left-btn') &&
      firstPage > 1
    )
      id = firstPage - 1;
    else if (
      e.target.closest('button').classList.contains('pagination__right-btn') &&
      firstPage < endPage
    )
      id = firstPage + 1;
    else return;
  } else {
    if (!isNaN(e.target.closest('li').id)) id = e.target.closest('li').id;
    else if (e.target.closest('li').id === '...')
      return apiServise.query
        ? successPages(endPage, apiServise.query)
        : successPages(endPage);
    else return;
  }
  spiner();
  apiServise.fetchPagination(id).then(data => {
    //додав спінер і плавний скролл
    renderCards(data);
    spinerRemove();
  });
}

// if (e.target === e.currentTarget) return;

// let id = null;
// if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'BUTTON') {
// if (
// e.target.closest('button').classList.contains('pagination__left-btn') &&
// firstPage > 1
// )
// id = firstPage - 1;
// else if (
// e.target.closest('button').classList.contains('pagination__right-btn') &&
// firstPage < endPage
// )
// id = firstPage + 1;
// else return;
// } else {
// id = e.target.closest('li').id;
// }
// apiServise.fetchPagination(id).then(data => {
// renderCards(data);
// });
// }
