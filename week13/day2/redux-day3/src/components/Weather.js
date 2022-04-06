import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEMP, WEATHER } from "../action-types/index";

export default function Weather() {
  const key = useSelector((state) => state.weather.key);
  const temperature = useSelector((state) => state.weather.temperature);
  const city = useSelector((state) => state.weather.city);

  const dispatch = useDispatch();
  const changeInputField = (e) => {
    dispatch({
      type: WEATHER,
      payload: e.target.value,
    });
  };
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${key}&APPID=510e4ace9989c6737b365be9f9960d16&units=imperial`;
  const getWeather = async (key) => {
    const data = await fetch(url);
    const json = await data.json();
    dispatch({
      type: TEMP,
      payload: {
        city: json.name,
        temperature: Math.floor(json.main.temp),
      },
    });
  };

  return (
    <div>
      <h1>Weather</h1>
      <h1>{temperature}</h1>
      <h1>{city}</h1>

      <input
        name="weather"
        type="text"
        onChange={changeInputField}
        placeholder="Enter a city"
      ></input>
      <button onClick={() => getWeather(key)}>Submit</button>
    </div>
  );
}
