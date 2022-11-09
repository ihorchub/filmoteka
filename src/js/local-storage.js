// variables declaration for further local storage content
const moviesWatched = [];
const moviesQueue = [];

export function locStorage(data) {
  // reaching "Add to Watched" and "Add to Queue" buttons
  const addWatched = document.querySelector('.add-watched');
  const addQueueRef = document.querySelector('.add-queue');

  // adding listeners to "Add to Watched" and "Add to Queue" buttons by clicking to "Add to Watched"
  addWatched.addEventListener('click', onWatchedClick);
  addQueueRef.addEventListener('click', onQueueClick);

  // functioin of adding to "Watched" to the local storage
  function onWatchedClick() {
    if (!moviesWatched.find(item => item.id === data.id)) {
      moviesWatched.push(data);
      localStorage.setItem('movies-watched', JSON.stringify(moviesWatched));
    }
  }

  // functioin of adding to "Queue" to the local storage by clicking "Add to Queue"
  function onQueueClick() {
    if (!moviesQueue.find(item => item.id === data.id)) {
      moviesQueue.push(data);
      localStorage.setItem('movies-queue', JSON.stringify(moviesQueue));
    }
  }
}
