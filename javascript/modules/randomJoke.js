import { getRandomJoke } from "../services/api.js";
import { Publisher } from "../publisher/publisher.js";

const jokeChange = new Publisher('joke.change');

async function renderRandomJoke() {
  const jokeData = await getRandomJoke(); 
  const { joke } = data;
  const randomJokeElement = document.getElementById('show_joke');
  randomJokeElement.textContent = joke;
  jokeChange.publish(joke);
}

const initRandomJokeComponent = () => {
  const aleatorioBtn = document.getElementById('get_btn');
  aleatorioBtn.addEventListener('click', renderRandomJoke);
};

function getJoke() {
  const showJoke = document.querySelector("#show_joke");

  return getRandomJoke()
    .then(data => {
      showJoke.textContent = data;
    });
}

export { getJoke, jokeChange, initRandomJokeComponent }