import { addToFavorite, addToGoing, addToInterested } from "../modules/singleton.js";

function handleData(data) {
  clearEvents();

  const eventsContainer = document.getElementById("events-container");
  const propiedadElement = document.createElement("p");
  propiedadElement.textContent = data.propiedad;
  eventsContainer.appendChild(propiedadElement);

  data.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = item;
    eventsContainer.appendChild(itemElement);

    const createButton = (text, className) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add(className);
      button.setAttribute("data-id", item.id);
      return button;
    };

    const interestedButton = createButton("Interested", "panels__interested");
    interestedButton.addEventListener("click", addToInterested);

    const goingButton = createButton("Going!", "panels__going");
    goingButton.addEventListener("click", addToGoing);

    const favoritesButton = createButton("Favorites", "panels__favorites");
    favoritesButton.addEventListener("click", addToFavorite);

    itemElement.append(interestedButton, goingButton, favoritesButton);
  });
}

function clearEvents() {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";
}

export { handleData };