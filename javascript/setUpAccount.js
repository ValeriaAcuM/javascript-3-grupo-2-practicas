import { renderCardsAccount } from "./modules/cardsAccounts.js";
import { renderCalendar } from "./modules/calendar.js";

function initAccount() {
  document.addEventListener("DOMContentLoaded", function () {
    const goingBtn = document.getElementById("goingBtn");
    const interestedBtn = document.getElementById("interestedBtn");
    const favoritesBtn = document.getElementById("favoritesBtn");
    const calendarBtn = document.getElementById("calendarBtn");

    goingBtn.addEventListener("click", function () {
      const goingList = JSON.parse(localStorage.getItem("going")) || "[]";
      renderCardsAccount(goingList);
    });

    favoritesBtn.addEventListener("click", function () {
      const favoritesList = JSON.parse(localStorage.getItem("favorites")) || "[]";
      renderCardsAccount(favoritesList);
    });

    interestedBtn.addEventListener("click", function () {
      const interestedList = JSON.parse(localStorage.getItem("interested")) || "[]";
      renderCardsAccount(interestedList);
    });

    calendarBtn.addEventListener("click", function () {
      const goingList = JSON.parse(localStorage.getItem("going")) || "[]";
      const interestedList = JSON.parse(localStorage.getItem("interested")) || "[]";
      const favoritesList = JSON.parse(localStorage.getItem("favorites")) || "[]";
      const events = [...goingList, ...interestedList, ...favoritesList];
      renderCalendar(events);
      renderCardsAccount(events);
    });
  });
}

export default initAccount;
