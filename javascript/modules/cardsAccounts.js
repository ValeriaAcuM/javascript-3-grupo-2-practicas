import { formatDate } from "../components/date.js";
import { formatPrice } from "../components/price.js";

function renderCardsAccount(data) {
  const panels = document.getElementsByClassName("panels");
  const cards = data
    .map(element => {
      const { image, title, date, location, price } = element;
      const formattedDate = formatDate(date);
      const formattedPrice = formatPrice(price);

      return `
    <li class="panels2">
      <div class="panels__item">
        <img class="panels__img" src="${image}" alt="">
        <p class="panels__title">${title}</p>
        <p class="panels__date">${formattedDate}</p>
        <p class="panels__location">${location}</p>
        <p class="panels__price">${formattedPrice}</p>
        <button class="panels__remove">Remove</button>
      </div>
    </li>`;
    })
    .join("");

  for (let i = 0; i < panels.length; i++) {
    panels[i].innerHTML = cards;

    const removeButtons = panels[i].getElementsByClassName("panels__remove");
    for (let j = 0; j < removeButtons.length; j++) {
      removeButtons[j].addEventListener("click", () => {
        const card = removeButtons[j].closest(".panels2");
        card.parentNode.removeChild(card);
      });
    }
  }
}

export { renderCardsAccount }