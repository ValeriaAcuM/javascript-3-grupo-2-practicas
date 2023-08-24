import { getJokeId } from "../utils/getParamsValues.js";
import { getJokeById } from "../services/api.js";

const renderSelectJoke = async () => {
  const selectedJoke = await getJokeId();
  console.log("selectedJoke:", selectedJoke);

  if (selectedJoke) { // NUEVO
    try {
  const joke = await getJokeById(selectedJoke);
  console.log("jokeD:", joke);
  const renderContainer = document.getElementById('renderJoke');
  const renderImageText = document.getElementById('jokeVisualization');

  renderContainer.innerHTML = joke.joke;
  renderImageText.innerHTML = joke.joke;
} catch (error) {
  console.error("Error fetching joke by ID:", error);
}
} else {
console.log("No selected joke ID");
}
}


export { renderSelectJoke }