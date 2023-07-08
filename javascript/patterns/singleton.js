class LocalStorageManager {
  constructor() {
    if (LocalStorageManager.instance) {
      return LocalStorageManager.instance;
    }

    this.initialize();
    LocalStorageManager.instance = this;
  }

  initialize() {
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }
}

const localStorageManager = new LocalStorageManager();

function addToInterested(event) {
  const cardId = event.target.getAttribute("data-id");
  const interestedList = JSON.parse(localStorageManager.getItem("interested")) || [];

  if (!interestedList.includes(cardId)) {
    interestedList.push(cardId);
    localStorageManager.setItem("interested", JSON.stringify(interestedList));
  }
}

function addToGoing(event) {
  const cardId = event.target.getAttribute("data-id");
  const goingList = JSON.parse(localStorageManager.getItem("going")) || [];

  if (!goingList.includes(cardId)) {
    goingList.push(cardId);
    localStorageManager.setItem("going", JSON.stringify(goingList));
  }
}

function addToFavorite(event) {
  const cardId = event.target.getAttribute("data-id");
  const favoritesList = JSON.parse(localStorageManager.getItem("favorites")) || [];

  if (!favoritesList.includes(cardId)) {
    favoritesList.push(cardId);
    localStorageManager.setItem("favorites", JSON.stringify(favoritesList));
  }
}

export {addToFavorite, addToGoing, addToInterested}