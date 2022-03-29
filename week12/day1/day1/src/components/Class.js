import React from "react";

export default class ClassComponent extends React.Component {
  // state, place to store data
  // might store data, keep data for later,
  // force react to show changes,
  // dictates what compnent renders
  state = {
    counter: 0,
    word: ["hello"],
    input: "",
  };
  counterAction = (event) => {
    if (event.target.name == "add") {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  addWords = () => {
    const copy = this.state.word;
    copy.push("Howdy");
    this.setState({ word: copy });
  };

  render() {
    const { word } = this.state;
    return (
      <div>
        <h1>Classes</h1>
        <h1>{this.state.counter}</h1>
        {word.map((word) => (
          <p>{word}</p>
        ))}
        <button name="add" onClick={(e) => this.counterAction(e)}>
          Increment
        </button>
        <button name="subtract" onClick={(e) => this.counterAction(e)}>
          Decrement
        </button>
        <input
          onChange={(e) => this.setState({ input: e.target.value })}
          type="text"
        />
        <button onClick={this.addWords()}>Submit</button>
      </div>
    );
  }
}
