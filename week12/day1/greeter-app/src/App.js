import logo from "./logo.svg";
import "./App.css";

import Greeter from "./components/Greeter";
const nameArray = ["Melanie", "Emma", "Mel B", "Geri", "Victoria"];
function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {nameArray.map((n) => (
        <Greeter key={n} name={n} />
      ))}
    </div>
  );
}

export default App;
