import { formatDate } from "../modules/date.js";
import { formatPrice } from "../modules/price.js";

function renderCards(data) {
  const panels = document.getElementsByClassName("panels");
  const cards = data.map(element => {
    const { image, title, date, location, price } = element;
    const formattedDate = formatDate(date);
    const formattedPrice = formatPrice(price);

    return `
    <li class="panels2">
      <div class="panels__item">
        <img class="panels__img" src="${image}" alt="">
        <button class="panels__btn-heart">&#x2764;</button>
        <p class="panels__title">${title}</p>
        <p class="panels__date">${formattedDate}</p>
        <p class="panels__location">${location.city}</p>
        <p class="panels__price">${formattedPrice}</p>
        <button class="panels__interested">Interested</button>
        <button class="panels__going">Going!</button>
      </div>
    </li>`;
  }).join('');

  for (let i = 0; i < panels.length; i++) {
    panels[i].innerHTML = cards;
  }
}

export { renderCards }