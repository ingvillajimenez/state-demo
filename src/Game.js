import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
    // NEVER CALL SETSTATE IN THE CONSTRUCTOR
    // this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <h1>Your Score Is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;
