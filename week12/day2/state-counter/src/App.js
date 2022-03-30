import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Counter initialCount={42} />
      <Counter initialCount={-13} />
      <Counter />
    </div>
  );
}

export default App;
