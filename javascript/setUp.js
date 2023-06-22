import { openTab } from "./modules/tabs.js";

function init() {
  const foodBtn = document.getElementById("foodBtn");
  const artBtn = document.getElementById("artBtn");
  const musicBtn = document.getElementById("musicBtn");
  const businessBtn = document.getElementById("businessBtn");
  const sportsBtn = document.getElementById("sportsBtn");

  foodBtn.addEventListener("click", function (event) {
    openTab(event, "food");
  });
  
  artBtn.addEventListener("click", function (event) {
    openTab(event, "art");
  });
  
  musicBtn.addEventListener("click", function (event) {
    openTab(event, "music");
  });
  
  businessBtn.addEventListener("click", function (event) {
    openTab(event, "business");
  });
  
  sportsBtn.addEventListener("click", function (event) {
    openTab(event, "sports");
  });
}

export default init;