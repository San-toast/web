import "./App.css";
import Countdown from "react-countdown";
import Images from "./Images";
function App() {
  const Completionist = () => <span>You are good to go!</span>;
  const e = `May 3, 04:00:00 2022`;
  let c = Date.now() - Date.parse(e);
  console.log(Date.parse(e), Date.now());
  console.log(c);

  return (
    <div className="App">
      <h1>Countdown</h1>

      <Countdown date={Date.now() + Math.abs(c)}>
        <Completionist />
      </Countdown>
      <Images />
    </div>
  );
}

export default App;
