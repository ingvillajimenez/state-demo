import React, { Component } from "react";
import Game from "./Game";
import Game2 from "./Game2";
import Demo from "./Demo";
import Rando from "./Rando";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando maxNum={7} />
      </div>
    );
  }
}

// new Demo({ animal: "Bobcat" });

export default App;
