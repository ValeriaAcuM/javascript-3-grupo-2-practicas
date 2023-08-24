import { getRandomJoke } from "../services/api.js";
import { Publisher } from "../publisher/publisher.js";

const jokeChange = new Publisher('joke.change');


async function renderRandomJoke() {
  const jokeData= await getRandomJoke(); 
  console.log("jokeData:", jokeData);

  const { joke } = jokeData;
  console.log("joke:", joke); // SALE NULL

  const randomJokeElement = document.getElementById('show_joke');
  randomJokeElement.innerHTML = joke;
  jokeChange.publish(joke);
}

const initRandomJokeComponent = () => {
  console.log("initRandomJokeComponent() called");
  const aleatorioBtn = document.getElementById('get_btn');
  aleatorioBtn.addEventListener('click', renderRandomJoke);
};

function getJoke() {
  const showJoke = document.querySelector("#show_joke");

  return getRandomJoke()
    .then(data => {
      console.log("data:", data);
      showJoke.innerHTML = data;
    });
}

export { getJoke, jokeChange, initRandomJokeComponent }