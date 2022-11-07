const pagination = document.querySelector('.pagination__container');

export function getPagination(currentPage, lastPage) {
  if (!currentPage || lastPage === 1 || lastPage - currentPage < 0) return;
  let pages = getPagesArray(currentPage, lastPage);

  pagination.innerHTML = `<button class="pagination__left-btn" type="button"><span>&#8592;</span></button>
    <ul class="pagination__list">
    </ul>
    <button class="pagination__right-btn" type="button"><span>&#8594;</span></button>`;

  if (window.screen.width <= 768) pagination.style = `margin-bottom: 40px`;
  else pagination.style = `margin-bottom: 60px`;

  const list = document.querySelector('.pagination__list');

  list.insertAdjacentHTML('beforeend', renderLi(pages));

  const itemList = list.children;

  for (let i = 0; i < itemList.length; i++) {
    if (!isNaN(Number(itemList[i].id)))
      itemList[i].classList.add('pagination__on');
    if (Number(itemList[i].id) === currentPage)
      itemList[i].classList.add('pagination__item--current');
  }
}

function renderLi(arr) {
  return arr.reduce(
    (acc, item) =>
      acc + `<li class="pagination__item" id='${item}'>${item}</li>`,
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
