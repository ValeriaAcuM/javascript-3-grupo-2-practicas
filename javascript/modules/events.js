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
  });
}

function clearEvents() {
  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';
}

export { handleData };