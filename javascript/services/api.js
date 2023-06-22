import { renderCards } from "../modules/cards.js";
import { handleData } from "../modules/events.js"

function fetchEvents(category) {
  fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`)
    .then(response => response.json())
    .then(data => {
      handleData(data);
      renderCards(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export { fetchEvents };