import { refs } from "./refs";

export function showBackdrop() {
  refs.backdrop.classList.remove('is-hidden');
  refs.body.style = `overflow-y: hidden`;
}

export function closeBackdrop() {
  refs.backdrop.classList.add('is-hidden');
  refs.backdrop.innerHTML = '';
  refs.body.style = `overflow-y: overlay`;
}
