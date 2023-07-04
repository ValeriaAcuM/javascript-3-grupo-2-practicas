import { renderCardsAccount } from "./modules/cardsAccounts.js";

function initAccount() {
  document.addEventListener("DOMContentLoaded", function () {
    const goingBtn = document.getElementById("goingBtn");
    const interestedBtn = document.getElementById("interestedBtn");
    const favoritesBtn = document.getElementById("favoritesBtn");

    goingBtn.addEventListener("click", function () {
      const goingList = JSON.parse(localStorage.getItem("going")) || [];
      renderCardsAccount(goingList);
    });

    favoritesBtn.addEventListener("click", function () {
      const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
      renderCardsAccount(favoritesList);
    });

    interestedBtn.addEventListener("click", function () {
      const interestedList = JSON.parse(localStorage.getItem("interested")) || [];
      renderCardsAccount(interestedList);
    });
  });
}

export default initAccount;