// 0. create variable for id of the movie from the modal window
let itemId = '';

// 1. reach the btn
const addQueueRef = document.querySelector('.js-movie-modal__btn');

// 2. create variable for localstorage's value
const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

// 3. add btn listener
addQueueRef.addEventListener('click', onQueueClick);

// 4. functioin of add to queue
function onQueueClick() {
  // 4.1 add ID to array
  moviesQueue.push(itemId);

  // 4.2 put array to local storage
  localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));
}

// need to confirm general algorithm
// could these options be it be in a separate js file?
// how to reach out movie's ID
