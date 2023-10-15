import React, { Component } from "react";
import Game from "./Game";
import Game2 from "./Game2";
import Demo from "./Demo";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import Rando from "./Rando";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrokenClick />
      </div>
    );
  }
}

// new Demo({ animal: "Bobcat" });

export default App;
