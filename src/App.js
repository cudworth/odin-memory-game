import "./App.css";

import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";

function App(props) {
  const [state, setState] = useState({ gameScore: 0, highScore: 0 });

  function handleScore() {
    setState((prev) => {
      const next = { ...prev };
      next.gameScore = prev.gameScore + 1;
      return next;
    });
  }

  function handleGameEnd() {
    alert(`Game score: ${state.gameScore}`);
    if (state.highScore < state.gameScore) {
      setState((prev) => {
        const next = { ...prev };
        next.highScore = prev.gameScore;
        next.gameScore = 0;
        return next;
      });
    } else {
      setState((prev) => {
        const next = { ...prev };
        next.highScore = prev.highScore;
        next.gameScore = 0;
        return next;
      });
    }
  }

  return (
    <div className="App">
      <Header highScore={state.highScore} gameScore={state.gameScore} />
      <Game onGameEnd={handleGameEnd} onScore={handleScore} />
    </div>
  );
}

export default App;
