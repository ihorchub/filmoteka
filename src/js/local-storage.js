// function launches when the movie modal opens functioin "showModal()" from film-modal.js
export function locStorage(data) {
  // variables declaration for further local storage content
  const moviesWatched =
    JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

  // reaching "Add to Watched" and "Add to Queue" buttons
  const addWatchedRef = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  // adding listeners to "Add to Watched" and "Add to Queue" buttons
  addWatchedRef.addEventListener('click', onWatchedClick);
  addQueueRef.addEventListener('click', onQueueClick);

  // checker if the movie from the modal is already exists in local storage
  // and make the buttons "Add to Watched" and "Add to Queue" appear accordingly
  if (localStorage.length > 0) {
    // let savedWatchedArr = JSON.parse(localStorage.getItem('movies-watched'));

    if (moviesWatched.find(item => item.id === data.id)) {
      addWatchedRef.classList.add('js-remove-from');
      addWatchedRef.textContent = 'remove from watched';
    }
  }

  if (localStorage.length > 0) {
    if (moviesQueue.find(item => item.id === data.id)) {
      addQueueRef.classList.add('js-remove-from');
      addQueueRef.textContent = 'remove from queue';
    }
  }

  // functioin of adding to "Watched" to the local storage by clicking "Add to Watched"
  function onWatchedClick() {
    if (!moviesWatched.find(item => item.id === data.id)) {
      moviesWatched.push(data);
      localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

      const res = addWatchedRef.classList.toggle('js-remove-from');
      addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;

      return;
    }

    let index = moviesWatched.findIndex(object => object.id === data.id);

    moviesWatched.splice(index, 1);
    localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));

    const res = addWatchedRef.classList.toggle('js-remove-from');
    addWatchedRef.textContent = `${res ? 'remove from' : 'add to'} watched `;
  }

  // functioin of adding to "Queue" to the local storage by clicking "Add to Queue"
  function onQueueClick() {
    if (!moviesQueue.find(item => item.id === data.id)) {
      moviesQueue.push(data);
      localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

      const res = addQueueRef.classList.toggle('js-remove-from');
      addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;

      return;
    }

    let index = moviesQueue.findIndex(object => object.id === data.id);

    moviesQueue.splice(index, 1);
    localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));

    const res = addQueueRef.classList.toggle('js-remove-from');
    addQueueRef.textContent = `${res ? 'remove from' : 'add to'} queue `;
  }
}
