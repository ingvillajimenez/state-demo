import React, { Component } from "react";
import Game from "./Game";
import Game2 from "./Game2";
import Demo from "./Demo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game color="purple" />
        <Demo animal="Bobcat" food="Pineapple" />
      </div>
    );
  }
}

// new Demo({ animal: "Bobcat" });

export default App;
