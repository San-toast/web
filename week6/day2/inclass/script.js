// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const movieSearch = document.querySelector(".movieSearch");

//   url = `http://www.omdbapi.com/?i=tt3896198&apikey=94fb7dcb&t=${movieSearch.value}`;
//   const getMovie = async () => {
//     const movie = await fetch(url);
//     const movieJson = await movie.json();
//     const testName = document.createElement("h3");
//     const moviePoster = document.createElement("img");
//     moviePoster.src = movieJson.Poster;
//     testName.innerText = movieJson.Title;
//     form.append(testName);
//     form.append(moviePoster);
//   };
//   getMovie();
// });

container = document.querySelector(".movieContainer");
const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.innerHTML = "";

  const movieSearch = document.querySelector(".movieSearch");

  url = `http://www.omdbapi.com/?i=tt3896198&apikey=94fb7dcb&s=${movieSearch.value}`;
  const getMovie = async () => {
    const movie = await fetch(url);
    const movieJson = await movie.json();
    for (const info of movieJson.Search) {
      const { Title, Poster } = info;
      const testName = document.createElement("h3");
      const moviePoster = document.createElement("img");
      moviePoster.src = Poster;
      testName.innerText = Title;
      container.append(testName);
      container.append(moviePoster);
    }
    console.log(movieJson);
  };
  getMovie();
});
