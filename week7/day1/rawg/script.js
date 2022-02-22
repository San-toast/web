const test = document.querySelector(".woo");
const button = document.querySelector(".button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  gameSearch();
  test.innerHTML = "";
});
const gameSearch = async () => {
  // const url = `https://api.rawg.io/api/games?key=4a3bbdb72d604272b46a518d041cd258&search=${input.value}`;
  const url = `https://api.rawg.io/api/games/${input.value}/game-series?key=4a3bbdb72d604272b46a518d041cd258`;
  console.log({ url });
  const getGame = await fetch(url);
  const gameJson = await getGame.json();
  console.log(gameJson);

  for (const result of gameJson.results) {
    const gameName = document.createElement("p");
    const gamePic = document.createElement("img");
    gameName.innerText = result.name;
    gamePic.src = result.background_image;
    test.append(gameName);
    test.append(gamePic);
  }
};
