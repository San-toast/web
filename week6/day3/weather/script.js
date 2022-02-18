const input = document.querySelector("input");
const button = document.querySelector(".btn.btn-info");
const mainCard = document.querySelector(".card");
const mainForm = document.querySelector(".card text-center border-0");
const foreContainer = document.createElement("h4");

button.addEventListener("click", () => {
  searchWeather();

  mainCard.innerHTML = "";
  foreContainer.innerHTML = "";
});

const searchWeather = async () => {
  console.log(input.value);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=&units=imperial&zip=`;
  console.log({ url });
  const getWeather = await fetch(url);
  const weatherJson = await getWeather.json();
  console.log(weatherJson);
  const lat = weatherJson.coord.lat;
  const lon = weatherJson.coord.lon;

  const forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=`;
  const getForecast = await fetch(forecast);
  const forecastJson = await getForecast.json();
  console.log(forecastJson);
  console.log(forecastJson.daily);
  const city = document.createElement("h4");
  const temp = document.createElement("h2");
  const description = document.createElement("h5");
  const icon = document.createElement("img");
  const wIcon = weatherJson.weather.map((a) => a.icon);

  foreContainer.innerText = "Four day forecast";
  foreContainer.className = "card bg-info bg-opacity-50";
  city.className = "card-text bg-secondary bg-opacity-50";
  icon.className = "card-img-top bg-info bg-opacity-50";
  temp.className = "card-text bg-secondary bg-opacity-50";
  description.className = "card-text bg-info bg-opacity-50";

  icon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
  temp.innerText = weatherJson.main.temp + `\u00B0`;
  city.innerText = weatherJson.name;
  description.innerText = weatherJson.weather.map((a) => a.description);

  mainCard.append(city);
  mainCard.append(icon);
  mainCard.append(description);
  mainCard.append(temp);
  mainCard.append(foreContainer);

  for (const day of forecastJson.daily.slice(0, 4)) {
    const foreTemp = document.createElement("h5");
    const foreIcon = document.createElement("img");
    foreIcon.src = day.weather.map((a) => a.icon);

    foreTemp.className = "card-text";
    foreTemp.innerText +=
      day.temp.day + `\u00B0` + " - " + day.weather.map((a) => a.description);
    console.log(day.temp.day);
    // foreContainer.append(foreIcon);
    foreContainer.append(foreTemp);
  }
};
