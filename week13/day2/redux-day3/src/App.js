import "./App.css";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import Weather from "./components/Weather";
function App() {
  const dispatch = useDispatch();
  dispatch({ type: "ON_LOGIN" });
  return (
    <div className="App">
      <h1>Redux Day 3</h1>
      {/* <Form /> */}
      <Weather />
    </div>
  );
}

export default App;
