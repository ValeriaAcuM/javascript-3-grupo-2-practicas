import { getJokeId } from "../utils/getParamsValues.js";
import { getJokeById } from "../services/api.js";

const renderSelectJoke = async () => {
  const selectedJoke = await getJokeId();
  const jokeData = await getJokeById(selectedJoke);
  const renderContainer = document.getElementById('renderJoke');
  const renderImageText = document.getElementById('jokeVisualization');

  renderContainer.innerText = jokeData.joke;
  renderImageText.innerText = jokeData.joke;
}

export { renderSelectJoke }