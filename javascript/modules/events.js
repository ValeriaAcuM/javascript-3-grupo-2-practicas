function handleData(data) {
  clearEvents();

  const eventsContainer = document.getElementById('events-container');
  const propiedadElement = document.createElement('p');
  propiedadElement.textContent = data.propiedad;
  eventsContainer.appendChild(propiedadElement);

  data.forEach(item => {
    const itemElement = document.createElement('p');
    itemElement.textContent = item;
    eventsContainer.appendChild(itemElement);

    const interestedButton = document.createElement('button');
    interestedButton.textContent = 'Interested';
    interestedButton.classList.add('panels__interested');
    interestedButton.setAttribute('data-id', item.id);

    interestedButton.addEventListener('click', addToInterested);

    const goingButton = document.createElement('button');
    goingButton.textContent = 'Going!';
    goingButton.classList.add('panels__going');
    goingButton.setAttribute('data-id', item.id);

    goingButton.addEventListener('click', addToGoing);

    const favoritesButton = document.createElement('button');
    favoritesButton.textContent = 'Favorites';
    favoritesButton.classList.add('panels__favorites');
    favoritesButton.setAttribute('data-id', item.id);

    favoritesButton.addEventListener('click', addToFavorite);

    itemElement.appendChild(interestedButton);
    itemElement.appendChild(goingButton);
    itemElement.appendChild(favoritesButton);
  });
}

function addToInterested(event) {
  const cardId = event.target.getAttribute('data-id');
  const interestedList = JSON.parse(localStorage.getItem('interested')) || [];

  if (!interestedList.includes(cardId)) {
    interestedList.push(cardId);
    localStorage.setItem('interested', JSON.stringify(interestedList));
  }
}

function addToGoing(event) {
  const cardId = event.target.getAttribute('data-id');
  const goingList = JSON.parse(localStorage.getItem('going')) || [];

  if (!goingList.includes(cardId)) {
    goingList.push(cardId);
    localStorage.setItem('going', JSON.stringify(goingList));
  }
}

function addToFavorite(event) {
  const cardId = event.target.getAttribute('data-id');
  const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

  if (!favoritesList.includes(cardId)) {
    favoritesList.push(cardId);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  }
}

function clearEvents() {
  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';
}

export { handleData };