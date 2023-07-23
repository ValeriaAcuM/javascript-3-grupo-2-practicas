import { fetchEventsOnce } from "../modules/cache.js";
import { handleData } from "../modules/events.js"
import { renderCards } from "../modules/cards.js";

function hideAllTabs() {
  const tabcontent = document.getElementsByClassName("tab");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

function activateTab(tab) {
  tab.style.display = "block";
  tab.classList.add("active");
}

function deactivateTab(tab) {
  tab.classList.remove("active");
}

function openTab(event, category) {
  hideAllTabs();

  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    deactivateTab(tablinks[i]);
  }

  const selectedTab = document.getElementById(category);
  activateTab(selectedTab);

  fetchEventsOnce(category)
  .then(data => {
    handleData(data);
    renderCards(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

export { openTab }