// variables declaration for further local storage content
const moviesWatched = JSON.parse(localStorage.getItem('movies-watched')) || [];
const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

export function locStorage(data) {
  // reaching "Add to Watched" and "Add to Queue" buttons
  const addWatchedRef = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  // adding listeners to "Add to Watched" and "Add to Queue" buttons by clicking to "Add to Watched"
  addWatchedRef.addEventListener('click', onWatchedClick);
  addQueueRef.addEventListener('click', onQueueClick);

  if (localStorage.length > 0) {
    let savedWatchedArr = JSON.parse(localStorage.getItem('movies-watched'));

    if (savedWatchedArr.find(item => item.id === data.id)) {
      addWatchedRef.classList.add('js-remove-from');
      addWatchedRef.textContent = 'remove from watched';
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
    }
  }
}
