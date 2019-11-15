import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const players = [
  {
    name: "Player 01",
    score: 25,
    id: 1
  },
  {
    name: "Player 02",
    score: 28,
    id: 2
  },
  {
    name: "Player 03",
    score: 85,
    id: 3
  },
  {
    name: "Player 04",
    score: 49,
    id: 4
  }
];

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">{props.handle}</span>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => setCount(count - 1)}
        className="counter-action decrement"
      >
        -
      </button>
      <span className="counter-score">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="counter-action increment"
      >
        +
      </button>
    </div>
  );
};

function App(props) {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {/* Players list */}

      {props.initialPlayers.map(function x(player) {
        return <Player handle={player.name} key={player.id.toString()} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App initialPlayers={players} />, rootElement);
