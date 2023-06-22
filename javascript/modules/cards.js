function renderCards(data) {
  const panels = document.getElementsByClassName("panels");
  const cards = data.map(element => {
    const { image, title, date, location, price } = element;
    const dateNew = new Date(date);

    return `
    <li class="panels2">
      <div class="panels__item">
        <img class="panels__img" src="${image}" alt="">
        <p class="panels__title">${title}</p>
        <p class="panels__date">${dateNew}</p>
        <p class="panels__location">${location.city}</p>
        <p class="panels__price">${price}</p>
      </div>
    </li>`;
  }).join('');

  for (let i = 0; i < panels.length; i++) {
    panels[i].innerHTML = cards;
  }
}

export { renderCards };