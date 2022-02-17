const input = document.querySelector("input");
const button = document.querySelector(".btn.btn-info");
const mainForm = document.querySelector(".weatherContainer");
button.addEventListener("click", () => {
  searchWeather();
  mainForm.innerHTML = "";
});

const searchWeather = async () => {
  console.log(input.value);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=&APPID=${insertAPihere}&units=imperial&zip=${input.value}`;
  console.log({ url });
  const getWeather = await fetch(url);
  const weatherJson = await getWeather.json();
  console.log(weatherJson);
  const city = document.createElement("h2");
  const temp = document.createElement("h2");
  temp.innerText = weatherJson.main.temp;
  city.innerText = weatherJson.name;
  mainForm.append(city);
  mainForm.append(temp);
};
