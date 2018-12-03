import React from "react";
import "./App.css";
import Title from "../title/Title";
import CurrentDateTime from "../current-date-time/CurrentDateTime";
import Player from "../player/Player";

function App() {
  return (
    <React.Fragment>
      <header>
        <a className="banner" href="/">
          <Title text="mimaflow Player" />
        </a>
      </header>
      <div className="player container">
        <Player/>
      </div>
      <footer>
        <CurrentDateTime />
      </footer>
    </React.Fragment>
  );
}

export default App;
