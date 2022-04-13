import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Store template</h1>

        <div className="LayoutContainer">
          <h1>America's #9 Rated General Store*</h1>
        </div>
        <a href="/products">Shop Now</a>
      </div>
      <div className="awards">
        <div className="award1">
          <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png"></img>
          <h1>Awarded for "Most Beneficial Store of Mankind"</h1>
        </div>
        <div className="award2">
          <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Academy_Award_trophy.png"></img>
          <h1>Awarded for "Best Visual Effects"</h1>
        </div>
        <div className="award3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/HarvardClassicsFrontispieceSocrates.jpg"></img>
          <h1>"This store has everything!" - Socrates</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
