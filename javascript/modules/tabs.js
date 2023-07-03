import { fetchEvents } from "../services/api.js";

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

  fetchEvents(category);
}

export { openTab }