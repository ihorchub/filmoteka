const backdrop = document.querySelector('.js-movie-modal-mask');
const body = document.querySelector('body');

export function showBackdrop() {
  backdrop.classList.remove('is-hidden');
  body.style = `overflow-y: hidden`;
}

export function closeBackdrop() {
  backdrop.classList.add('is-hidden');
  backdrop.innerHTML = '';
  body.style = `overflow-y: overlay`;
}
