import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
      <div className="column eight wide">
        <SongDetail />
      </div>
    </div>
  );
}

export default App;
