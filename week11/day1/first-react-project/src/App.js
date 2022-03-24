import "./App.css";
import Location from "./Location";
function App() {
  const name = "Santos";
  const favFood = "Pizza";
  const city = "Keaau";
  return (
    <div className="App">
      <h1>{name}</h1>
      <Location city={city} />
      <p>{name}</p>
      <p>{favFood}</p>
    </div>
  );
}

export default App;
