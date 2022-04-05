import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { WEATHER } from "../action-types/index";

export default function Weather() {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const changeInputField = (e) => {
    dispatch({
      type: WEATHER,
      payload: e.target.value,
    });
  };
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${weather}&APPID=510e4ace9989c6737b365be9f9960d16&units=imperial`;
  const getWeather = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Weather</h1>
      <input
        name="weather"
        type="text"
        onChange={changeInputField}
        placeholder="Enter a city"
      ></input>
      <button onClick={() => getWeather(weather)}>Submit</button>
    </div>
  );
}
