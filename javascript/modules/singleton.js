let state = JSON.parse(localStorage.getItem("appState")) || {};

function getState() {
  return { ...state };
}

function setState(newState) {
  state = { ...state, ...newState };
  localStorage.setItem("appState", JSON.stringify(state));
}

function addToInterested(event) {
  const cardId = event.target.getAttribute("data-id");
  const interestedList = getState().interested || [];

  if (!interestedList.includes(cardId)) {
    setState({ interested: [...interestedList, cardId] });
  }
}

function addToGoing(event) {
  const cardId = event.target.getAttribute("data-id");
  const goingList = getState().going || [];

  if (!goingList.includes(cardId)) {
    setState({ going: [...goingList, cardId] });
  }
}

function addToFavorite(event) {
  const cardId = event.target.getAttribute("data-id");
  const favoritesList = getState().favorites || [];

  if (!favoritesList.includes(cardId)) {
    setState({ favorites: [...favoritesList, cardId] });
  }
}

addToInterested({ target: { getAttribute: () => "someCardId" } });

export {addToFavorite, addToGoing, addToInterested}