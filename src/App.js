import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div className="App">
      <div className="Header">
        <h1>Pokemon Stats</h1>
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
